import { PageShell } from "@/components/layout/page-shell";
import { ProductForm } from "@/components/admin/product-form";

export default function NewProductPage() {
  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Admin</p>
        <h1 className="text-5xl">Create Product</h1>
      </div>
      <ProductForm />
    </PageShell>
  );
}
