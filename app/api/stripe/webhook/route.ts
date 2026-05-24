import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid signature", details: String(error) }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const items = session.metadata?.items ? JSON.parse(session.metadata.items) : [];
    const shippingAddress = session.metadata?.shippingAddress
      ? JSON.parse(session.metadata.shippingAddress)
      : {};

    if (userId) {
      await prisma.order.create({
        data: {
          userId,
          items,
          total: Math.round((session.amount_total ?? 0) / 100),
          shippingAddress,
          status: "PAID",
          stripeSessionId: session.id
        }
      });
    }
  }

  return NextResponse.json({ received: true });
}
