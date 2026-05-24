import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell className="space-y-6 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">404</p>
      <h1 className="text-6xl">This page slipped out of the lineup.</h1>
      <p className="mx-auto max-w-xl text-text-secondary">
        The page you tried to open does not exist or may have moved.
      </p>
      <div className="flex justify-center">
        <Button asChild>
          <Link href="/shop">Back to shop</Link>
        </Button>
      </div>
    </PageShell>
  );
}
