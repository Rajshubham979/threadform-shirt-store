import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { OrderStatusSelect } from "@/components/admin/order-status-select";
import { mockOrders } from "@/lib/mock-data";

export default async function AdminOrdersPage() {
  const orders = mockOrders;

  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Admin</p>
        <h1 className="text-5xl">Orders Preview</h1>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="text-sm text-text-secondary">{order.userEmail}</p>
              </div>
              <OrderStatusSelect orderId={order.id} initialStatus={order.status} />
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
