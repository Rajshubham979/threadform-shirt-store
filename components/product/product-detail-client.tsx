"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import type { ProductRecord } from "@/types";

export function ProductDetailClient({ product }: { product: ProductRecord }) {
  const [activeImage, setActiveImage] = useState(product.images[0]?.url ?? "");
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const tabs = useMemo(
    () => [
      { id: "description", label: "Description", content: product.description },
      {
        id: "details",
        label: "Details",
        content: `Category: ${product.category}. Sizes: ${product.sizes.join(", ")}. Colors: ${product.colors.join(", ")}.`
      }
    ],
    [product]
  );

  return (
    <PageShell className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <Card className="relative aspect-square overflow-hidden">
            <Image src={activeImage} alt={product.name} fill className="object-cover" />
          </Card>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image) => (
              <button
                type="button"
                key={image.id}
                onClick={() => setActiveImage(image.url)}
                className="relative aspect-square overflow-hidden rounded-[var(--radius-base)] border"
              >
                <Image src={image.url} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Badge>{product.category}</Badge>
          <div>
            <h1 className="text-5xl">{product.name}</h1>
            <p className="mt-3 text-xl text-text-secondary">{product.description}</p>
          </div>
          <p className="text-3xl font-semibold">{formatCurrency(product.price)}</p>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Select size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSize(option)}
                  className={`rounded-full border px-4 py-2 text-sm ${size === option ? "bg-[var(--color-primary)] text-white" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Select color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setColor(option)}
                  className={`rounded-full border px-4 py-2 text-sm ${color === option ? "bg-[var(--color-primary)] text-white" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </Button>
            <span className="min-w-8 text-center">{quantity}</span>
            <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              addItem({
                productId: product.id,
                name: product.name,
                image: product.images[0]?.url ?? "",
                size,
                color,
                price: product.price,
                quantity
              });
              toast.success("Added to cart");
            }}
          >
            Add to cart
          </Button>

          <Card className="p-6">
            <div className="space-y-5">
              {tabs.map((tab) => (
                <div key={tab.id}>
                  <h2 className="text-2xl">{tab.label}</h2>
                  <p className="mt-2 text-text-secondary">{tab.content}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
