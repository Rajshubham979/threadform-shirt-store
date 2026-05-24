import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="font-heading text-3xl">THREADFORM</p>
          <p className="mt-3 text-sm text-text-secondary">
            Premium shirts engineered for everyday rotation.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Shop</p>
          <div className="space-y-2 text-sm">
            <Link href="/shop">All products</Link>
            <div>Plain shirts</div>
            <div>Graphic tees</div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Support</p>
          <div className="space-y-2 text-sm">
            <div>Shipping</div>
            <div>Returns</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Legal</p>
          <div className="space-y-2 text-sm">
            <div>Privacy policy</div>
            <div>Terms of service</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
