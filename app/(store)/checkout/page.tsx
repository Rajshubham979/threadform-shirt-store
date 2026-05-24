import { PageShell } from "@/components/layout/page-shell";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <PageShell className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Checkout</p>
        <h1 className="text-5xl">Secure Payment</h1>
      </div>
      <CheckoutForm />
    </PageShell>
  );
}
