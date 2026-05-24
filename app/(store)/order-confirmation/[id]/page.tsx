import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { mockOrders } from "@/lib/mock-data";

type OrderConfirmationPageProps = {
  params: { id: string };
};

export default async function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  const order = mockOrders.find((entry) => entry.id === params.id) ?? mockOrders[0];
  if (!order) {
    notFound();
  }
  const address = order.shippingAddress;
  const items = order.items;

  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Order confirmed</p>
        <h1 className="text-5xl">Thank you for your order</h1>
      </div>
      <Card className="space-y-6 p-8">
        <div>
          <p className="text-sm text-text-secondary">Order ID</p>
          <p className="text-xl font-semibold">{order.id}</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Items ordered</p>
          <div className="mt-2 space-y-2">
            {items.map((item, index) => (
              <p key={index}>
                {item.name} x {item.quantity}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Shipping address</p>
          <p className="mt-2">
            {address.fullName}, {address.line1}, {address.city}, {address.state}, {address.postalCode}
          </p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Estimated delivery</p>
          <p className="mt-2">4-7 business days</p>
        </div>
      </Card>
    </PageShell>
  );
}
