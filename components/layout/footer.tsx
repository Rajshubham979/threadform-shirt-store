import Link from "next/link";
import { designConfig } from "@/config/design.config";
import { Logo } from "@/components/brand/logo";

const quickLinks = [
  { label: "Shop all", href: "/shop" },
  { label: "Oversized", href: "/shop?category=Oversized" },
  { label: "Graphics", href: "/shop?category=Graphic" },
  { label: "Polos", href: "/shop?category=Polo" }
] as const;

const supportLinks = [
  { label: "Shipping", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Track order", href: "#" }
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-[var(--color-primary)] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="site-shell relative py-12 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <span className="sticker -rotate-2">{designConfig.brand.name.toLowerCase()} online</span>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Streetwear built for repeat outfits</p>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Logo className="text-white" textClassName="text-[3.9rem] md:text-[6.8rem]" accentClassName="bg-[var(--color-secondary)]" />
            <div className="mt-1">
              <Logo className="footer-outline" textClassName="text-[3.9rem] md:text-[6.8rem]" accentClassName="bg-white/70" />
            </div>
            <p className="mt-5 max-w-xl text-sm text-white/68 md:text-base">
              Made for oversized days, graphic moods, late-night plans, and outfits that should never feel over-explained.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-white/12 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.26em] text-white/58">Quick links</p>
              <div className="mt-4 space-y-3 text-sm uppercase">
                {quickLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block transition hover:text-[var(--color-secondary)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-white/12 bg-[var(--color-secondary)] p-5 text-[var(--color-primary)]">
              <p className="text-xs uppercase tracking-[0.26em] opacity-70">Support</p>
              <div className="mt-4 space-y-3 text-sm font-medium uppercase">
                {supportLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block transition hover:opacity-70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/55 md:grid-cols-[1fr_auto_auto] md:items-center">
          <p>No dress code. Just better rotation pieces.</p>
          <Link href="/account" className="transition hover:text-white">
            Account
          </Link>
          <p>{designConfig.brand.name} 2026</p>
        </div>
      </div>
    </footer>
  );
}
