"use client";

import { PageShell } from "@/components/layout/page-shell";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Cart</p>
        <h1 className="text-5xl">Your Bag</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[var(--radius-card)] border border-dashed p-10 text-center text-text-secondary">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.size}-${item.color}`}
                item={item}
                onRemove={() => removeItem(item.productId, item.size, item.color)}
                onUpdate={(quantity) => updateQuantity(item.productId, item.size, item.color, quantity)}
              />
            ))}
          </div>
          <CartSummary subtotal={subtotal} />
        </div>
      )}
    </PageShell>
  );
}
