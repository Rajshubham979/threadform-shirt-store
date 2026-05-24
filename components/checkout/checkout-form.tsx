"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCartStore } from "@/store/cartStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

function CheckoutInner() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India"
  });
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2500 ? 0 : 199;
  const total = subtotal + shipping;

  async function handleCheckout() {
    if (!items.length) {
      toast.error("Add a shirt to the cart first");
      return;
    }

    clearCart();
    toast.success("Preview checkout complete");
    router.push("/order-confirmation/mock-order-1001");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <Card className="p-6">
        <h2 className="text-3xl">Shipping Address</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Object.entries(formData).map(([key, value]) => (
            <Input
              key={key}
              placeholder={key}
              value={value}
              onChange={(event) =>
                setFormData((current) => ({ ...current, [key]: event.target.value }))
              }
              className={key === "line1" || key === "line2" ? "md:col-span-2" : ""}
            />
          ))}
        </div>
        <div className="mt-6 rounded-[var(--radius-base)] border border-dashed p-4 text-sm text-text-secondary">
          Frontend preview mode: this button simulates a successful checkout so you can see the order success page.
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl">Order Summary</h2>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}-${item.color}`} className="flex justify-between gap-4 text-sm">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 border-t pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
        <Button className="mt-6 w-full" onClick={handleCheckout}>
          Continue to Stripe Checkout
        </Button>
      </Card>
    </div>
  );
}

export function CheckoutForm() {
  return <CheckoutInner />;
}
