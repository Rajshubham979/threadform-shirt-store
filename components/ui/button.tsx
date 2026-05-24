import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { designConfig } from "@/config/design.config";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-[var(--color-primary)] text-white shadow-soft hover:brightness-110",
        outline:
          "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[color:color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
        ghost:
          "bg-transparent text-[var(--color-text-primary)] hover:bg-[color:color-mix(in_srgb,var(--color-primary)_8%,transparent)]"
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8"
      }
    },
    defaultVariants: {
      variant: designConfig.components.buttonStyle,
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        style={{ borderRadius: "var(--radius-button)", ...style }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
