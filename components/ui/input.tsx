import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, style, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-12 w-full border bg-[var(--color-surface)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)]",
        className
      )}
      ref={ref}
      style={{ borderRadius: "var(--radius-base)", ...style }}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
