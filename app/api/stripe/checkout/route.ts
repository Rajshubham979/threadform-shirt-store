import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { checkoutSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const shipping = parsed.data.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) > 2500
    ? 0
    : 199;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/order-confirmation/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
    customer_email: parsed.data.shippingAddress.email,
    line_items: [
      ...parsed.data.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "inr",
          unit_amount: item.price * 100,
          product_data: {
            name: item.name,
            images: [item.image],
            metadata: {
              productId: item.productId,
              size: item.size,
              color: item.color
            }
          }
        }
      })),
      {
        quantity: 1,
        price_data: {
          currency: "inr",
          unit_amount: shipping * 100,
          product_data: {
            name: "Shipping"
          }
        }
      }
    ],
    metadata: {
      userId: session.user.id,
      shippingAddress: JSON.stringify(parsed.data.shippingAddress),
      items: JSON.stringify(parsed.data.items)
    }
  });

  return NextResponse.json({ id: checkoutSession.id, url: checkoutSession.url });
}
