import type { HTMLAttributes } from "react";
import { designConfig } from "@/config/design.config";
import { cn } from "@/lib/utils";

const cardStyles = {
  shadow: "border border-transparent bg-[var(--color-surface)] shadow-soft",
  bordered: "border bg-[var(--color-surface)]",
  flat: "bg-[var(--color-surface)]"
} as const;

export function Card({ className, style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel overflow-hidden",
        cardStyles[designConfig.components.cardStyle],
        className
      )}
      style={{ borderRadius: "var(--radius-card)", ...style }}
      {...props}
    />
  );
}
