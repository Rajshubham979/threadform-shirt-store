import { PageShell } from "@/components/layout/page-shell";

export default function Loading() {
  return (
    <PageShell>
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-80 animate-pulse rounded-[var(--radius-card)] bg-[color:color-mix(in_srgb,var(--color-surface)_50%,gray)]"
          />
        ))}
      </div>
    </PageShell>
  );
}
