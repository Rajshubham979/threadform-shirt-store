import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { ProductForm } from "@/components/admin/product-form";
import { getProductById } from "@/lib/data";

type AdminProductDetailPageProps = {
  params: { id: string };
};

export default async function AdminProductDetailPage({ params }: AdminProductDetailPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Admin</p>
        <h1 className="text-5xl">Edit {product.name}</h1>
      </div>
      <ProductForm product={JSON.parse(JSON.stringify(product))} />
    </PageShell>
  );
}
