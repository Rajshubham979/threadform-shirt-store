import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

type CartSummaryProps = {
  subtotal: number;
};

export function CartSummary({ subtotal }: CartSummaryProps) {
  const shipping = subtotal > 2500 ? 0 : 199;
  const total = subtotal + shipping;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold">Order Summary</h2>
      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Shipping</span>
          <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between border-t pt-4 text-base font-semibold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      <Button asChild className="mt-6 w-full">
        <Link href="/checkout">Proceed to checkout</Link>
      </Button>
    </Card>
  );
}
