export function ProductSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-[420px] animate-pulse rounded-[var(--radius-card)] bg-[color:color-mix(in_srgb,var(--color-surface)_55%,gray)]"
        />
      ))}
    </div>
  );
}
