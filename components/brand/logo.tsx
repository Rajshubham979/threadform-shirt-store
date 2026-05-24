import { designConfig, type LogoStyle } from "@/config/design.config";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
  accentClassName?: string;
  variant?: LogoStyle;
};

function DigitalLogo({
  className,
  textClassName,
  accentClassName
}: Required<Pick<LogoProps, "className" | "textClassName" | "accentClassName">>) {
  return (
    <span className={cn("relative inline-flex items-center leading-none", className)}>
      <span className={cn("font-body text-[1.95rem] font-bold lowercase tracking-[0.18em]", textClassName)}>
        dh
      </span>
      <span className={cn("font-body text-[1.95rem] font-bold lowercase tracking-[0.18em] text-[var(--color-secondary)]", textClassName)}>
        4
      </span>
      <span className={cn("font-body text-[1.95rem] font-bold lowercase tracking-[0.18em]", textClassName)}>
        nshoo
      </span>

      <span
        className={cn(
          "absolute left-[5.15em] top-[-0.36em] h-[0.16em] w-[1.12em] -rotate-[8deg] rounded-full bg-[var(--color-secondary)]",
          accentClassName
        )}
      />
      <span
        className={cn(
          "absolute left-[6.4em] top-[-0.54em] h-[0.22em] w-[0.22em] rounded-[4px] bg-[var(--color-secondary)]",
          accentClassName
        )}
      />
      <span
        className={cn(
          "absolute left-[5.72em] bottom-[-0.28em] h-[0.16em] w-[1.2em] rotate-[6deg] rounded-full bg-[var(--color-secondary)]",
          accentClassName
        )}
      />
      <span
        className={cn(
          "absolute left-[7.02em] bottom-[-0.34em] h-0 w-0 border-y-[0.18em] border-l-[0.28em] border-y-transparent border-l-[var(--color-secondary)]",
          accentClassName
        )}
      />
    </span>
  );
}

export function Logo({
  className,
  textClassName,
  accentClassName,
  variant = designConfig.brand.logoStyle
}: LogoProps) {
  if (variant === "digital") {
    return (
      <DigitalLogo
        className={className ?? ""}
        textClassName={textClassName ?? ""}
        accentClassName={accentClassName ?? ""}
      />
    );
  }

  return null;
}
