"use client";

import Link from "next/link";
import { Menu, Moon, ShoppingBag, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { designConfig } from "@/config/design.config";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navClassByStyle = {
  sticky: "sticky top-0 z-50",
  fixed: "fixed inset-x-0 top-0 z-50",
  static: "relative"
} as const;

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className={cn(navClassByStyle[designConfig.components.navStyle], "border-b bg-[color:color-mix(in_srgb,var(--color-surface)_86%,transparent)] backdrop-blur-md")}>
      <div className="site-shell flex h-nav items-center justify-between gap-4">
        <Link href="/" className="font-heading text-4xl tracking-[0.12em]">
          THREADFORM
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/account">Account</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link href="/cart" className="relative rounded-full border p-3">
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-[10px] text-white">
                {itemCount}
              </span>
            ) : null}
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
