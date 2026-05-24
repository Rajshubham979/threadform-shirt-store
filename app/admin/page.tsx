import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockOrders, mockProducts } from "@/lib/mock-data";

export default async function AdminPage() {
  const products = mockProducts.slice(0, 5);
  const orders = mockOrders.slice(0, 5);

  return (
    <PageShell className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Admin</p>
          <h1 className="text-5xl">Dashboard Preview</h1>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-3xl">Products</h2>
          <div className="mt-6 space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between rounded-[var(--radius-base)] border p-4">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-text-secondary">{product.category}</p>
                </div>
                <Link href={`/admin/products/${product.id}`} className="text-sm font-semibold text-[var(--color-primary)]">
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-3xl">Recent Orders</h2>
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="rounded-[var(--radius-base)] border p-4">
                <p className="font-semibold">{order.id}</p>
                <p className="text-sm text-text-secondary">
                  {order.userEmail} · {order.status}
                </p>
              </div>
            ))}
          </div>
          <Button variant="outline" asChild className="mt-6">
            <Link href="/admin/orders">Manage orders</Link>
          </Button>
        </Card>
      </div>
    </PageShell>
  );
}
