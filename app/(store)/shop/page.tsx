import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { ProductGrid } from "@/components/product/product-grid";
import { getProductsForShop } from "@/lib/data";

type ShopPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const filterValues = {
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Olive", "Sand", "Navy", "Cream", "Stone", "Blue"],
  categories: ["Plain", "Graphic", "Oversized", "Polo"]
};

const trendCards = [
  {
    title: "Oversized Uniform",
    description: "Roomier cuts and muted tones built for layering.",
    href: "/shop?category=Oversized"
  },
  {
    title: "Graphic Signal",
    description: "Sharper statements with washed surfaces and stronger prints.",
    href: "/shop?category=Graphic"
  },
  {
    title: "Clean Core",
    description: "Minimal staples that ground the rest of the fit.",
    href: "/shop?category=Plain"
  }
];

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { products, page, totalPages } = await getProductsForShop(searchParams);

  return (
    <PageShell className="space-y-10">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Shop</p>
        <h1 className="text-5xl uppercase">Streetwear Trends</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Shop the collection through a few cleaner directions instead of one long generic grid.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {trendCards.map((trend) => (
          <Card key={trend.title} className="border-[1.5px] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-text-secondary">Trend</p>
            <h2 className="mt-3 text-3xl uppercase">{trend.title}</h2>
            <p className="mt-3 text-sm text-text-secondary">{trend.description}</p>
            <Link href={trend.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Open trend
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-6">
          <Card className="border-[1.5px] p-6">
            <h2 className="text-2xl font-semibold uppercase">Filters</h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {filterValues.sizes.map((size) => (
                    <Link key={size} href={`/shop?sizes=${size}`} className="rounded-full border border-[1.5px] px-3 py-2 text-sm uppercase">
                      {size}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">Colors</p>
                <div className="flex flex-wrap gap-2">
                  {filterValues.colors.map((color) => (
                    <Link key={color} href={`/shop?colors=${color}`} className="rounded-full border border-[1.5px] px-3 py-2 text-sm">
                      {color}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">Category</p>
                <div className="space-y-2 text-sm uppercase">
                  {filterValues.categories.map((category) => (
                    <Link key={category} href={`/shop?category=${category}`} className="block">
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-text-secondary">Refine the edit by shape, color, and price.</p>
            <div className="flex flex-wrap gap-2 text-sm uppercase">
              <Link href="/shop?sort=newest" className="rounded-full border border-[1.5px] px-4 py-2">
                Newest
              </Link>
              <Link href="/shop?sort=price-asc" className="rounded-full border border-[1.5px] px-4 py-2">
                Price low-high
              </Link>
              <Link href="/shop?sort=price-desc" className="rounded-full border border-[1.5px] px-4 py-2">
                Price high-low
              </Link>
            </div>
          </div>
          <ProductGrid products={JSON.parse(JSON.stringify(products))} />
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <Link
                key={index}
                href={`/shop?page=${index + 1}`}
                className={`rounded-full border border-[1.5px] px-4 py-2 text-sm ${page === index + 1 ? "bg-[var(--color-primary)] text-white" : ""}`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
