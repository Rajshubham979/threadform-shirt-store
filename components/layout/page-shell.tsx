import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type PageShellProps = PropsWithChildren<{
  className?: string;
}>;

export function PageShell({ className, children }: PageShellProps) {
  return <div className={cn("site-shell page-transition py-8", className)}>{children}</div>;
}
