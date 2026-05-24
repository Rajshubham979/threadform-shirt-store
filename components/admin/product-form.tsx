"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ProductRecord } from "@/types";

type ProductFormProps = {
  product?: ProductRecord;
};

const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [images, setImages] = useState(product?.images ?? []);
  const [form, setForm] = useState({
    name: product?.name ?? "",
    description: product?.description ?? "",
    price: product?.price ?? 999,
    category: product?.category ?? "Plain",
    sizes: product?.sizes ?? ["M"],
    colors: product?.colors.join(", ") ?? "Black, White",
    stock: product?.stock ?? 10
  });

  const payload = useMemo(
    () => ({
      name: form.name,
      description: form.description,
      price: Number(form.price),
      category: form.category,
      sizes: form.sizes,
      colors: form.colors
        .split(",")
        .map((color) => color.trim())
        .filter(Boolean),
      images: images.map((image, index) => ({
        url: image.url,
        alt: image.alt,
        order: index
      })),
      stock: Number(form.stock)
    }),
    [form, images]
  );

  async function handleUpload(file: File) {
    setImages((current) => [
      ...current,
      { id: crypto.randomUUID(), url: URL.createObjectURL(file), alt: file.name, order: current.length }
    ]);
    toast.success("Preview image added");
  }

  async function handleSubmit() {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitting(false);

    toast.success(product ? "Preview product updated" : "Preview product created");
    router.push("/admin");
    router.refresh();
  }

  async function handleDelete() {
    if (!product) {
      return;
    }

    toast.success("Preview product removed");
    router.push("/admin");
    router.refresh();
  }

  return (
    <Card className="space-y-5 p-6">
      <div className="rounded-[var(--radius-base)] border border-dashed p-4 text-sm text-text-secondary">
        Frontend preview mode: changes here update the interface flow only and are not saved to a backend yet.
      </div>
      <Input
        placeholder="Product name"
        value={form.name}
        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
      />
      <textarea
        className="min-h-40 w-full rounded-[var(--radius-base)] border bg-[var(--color-surface)] p-4 outline-none focus:border-[var(--color-primary)]"
        placeholder="Description"
        value={form.description}
        onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Input
          placeholder="Category"
          value={form.category}
          onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
        />
        <Input
          placeholder="Price"
          type="number"
          value={String(form.price)}
          onChange={(event) => setForm((current) => ({ ...current, price: Number(event.target.value) }))}
        />
        <Input
          placeholder="Stock"
          type="number"
          value={String(form.stock)}
          onChange={(event) => setForm((current) => ({ ...current, stock: Number(event.target.value) }))}
        />
      </div>
      <Input
        placeholder="Colors, comma separated"
        value={form.colors}
        onChange={(event) => setForm((current) => ({ ...current, colors: event.target.value }))}
      />
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Sizes</p>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => {
            const selected = form.sizes.includes(size);
            return (
              <button
                type="button"
                key={size}
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    sizes: selected
                      ? current.sizes.filter((entry) => entry !== size)
                      : [...current.sizes, size]
                  }))
                }
                className={`rounded-full border px-4 py-2 text-sm ${selected ? "bg-[var(--color-primary)] text-white" : ""}`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-[var(--radius-base)] border p-4">
        <p className="font-semibold">Cloudinary Images</p>
        <input
          type="file"
          accept="image/*"
          className="mt-4 block text-sm"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              void handleUpload(file);
            }
          }}
        />
        <div className="mt-4 space-y-2 text-sm text-text-secondary">
          {images.map((image, index) => (
            <div key={image.id} className="flex items-center justify-between gap-4 rounded-[var(--radius-base)] border p-3">
              <span className="truncate">{index + 1}. {image.url}</span>
              <button
                type="button"
                onClick={() => setImages((current) => current.filter((entry) => entry.id !== image.id))}
                className="text-[var(--color-error)]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button disabled={submitting} onClick={handleSubmit}>
          {submitting ? "Saving..." : product ? "Save changes" : "Create product"}
        </Button>
        {product ? (
          <Button variant="outline" onClick={handleDelete}>
            Delete product
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
