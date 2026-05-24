"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency } from "@/lib/utils";
import type { ProductRecord } from "@/types";

type ProductCardProps = {
  product: ProductRecord;
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const primaryImage = product.images[0];

  return (
    <Card className="group h-full border-[1.5px]">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={primaryImage?.url ?? "/images/placeholder-shirt.svg"}
            alt={primaryImage?.alt ?? product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className="border-0 bg-transparent px-0 py-0 tracking-[0.3em]">{product.category}</Badge>
            <Link href={`/product/${product.id}`} className="mt-2 block text-lg font-semibold uppercase tracking-[0.04em]">
              {product.name}
            </Link>
          </div>
          <div className="text-sm font-semibold tracking-[0.08em]">{formatCurrency(product.price)}</div>
        </div>
        <Button
          className="w-full border-[1.5px] uppercase tracking-[0.18em]"
          onClick={() => {
            addItem({
              productId: product.id,
              name: product.name,
              image: primaryImage?.url ?? "",
              size: product.sizes[0] as ProductRecord["sizes"][number],
              color: product.colors[0] ?? "Default",
              price: product.price,
              quantity: 1
            });
            toast.success(`${product.name} added to cart`);
          }}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
