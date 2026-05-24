"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { CartItem as CartItemType } from "@/types";

type CartItemProps = {
  item: CartItemType;
  onUpdate: (quantity: number) => void;
  onRemove: () => void;
};

export function CartItem({ item, onUpdate, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 rounded-[var(--radius-card)] border bg-[var(--color-surface)] p-4">
      <div className="relative h-28 w-24 overflow-hidden rounded-[var(--radius-base)]">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-text-secondary">
              {item.size} / {item.color}
            </p>
          </div>
          <button type="button" onClick={onRemove} className="text-text-secondary">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => onUpdate(Math.max(1, item.quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-8 text-center">{item.quantity}</span>
            <Button variant="ghost" size="sm" onClick={() => onUpdate(item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="font-semibold">{formatCurrency(item.price * item.quantity)}</div>
        </div>
      </div>
    </div>
  );
}
