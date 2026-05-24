import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockOrders, mockUser } from "@/lib/mock-data";

export default async function AccountPage() {
  const orders = mockOrders.filter((order) => order.userEmail === mockUser.email);

  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Account</p>
        <h1 className="text-5xl">Previewing {mockUser.name}&apos;s account</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <h2 className="text-3xl">Order History</h2>
          <div className="mt-6 space-y-4">
            {orders.length ? (
              orders.map((order) => (
                <div key={order.id} className="rounded-[var(--radius-base)] border p-4">
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-text-secondary">
                    {order.status} · INR {order.total}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-text-secondary">No orders yet.</p>
            )}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-3xl">Profile Settings</h2>
          <div className="mt-4 space-y-3 text-sm">
            <p>Email: {mockUser.email}</p>
            <p>Role: {mockUser.role}</p>
          </div>
          <Button className="mt-6">Edit profile</Button>
        </Card>
      </div>
    </PageShell>
  );
}
