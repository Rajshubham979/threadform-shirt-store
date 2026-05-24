import { ProductCard } from "@/components/product/product-card";
import type { ProductRecord } from "@/types";

type ProductGridProps = {
  products: ProductRecord[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="rounded-[var(--radius-card)] border border-dashed p-10 text-center text-text-secondary">
        No shirts matched the current filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
