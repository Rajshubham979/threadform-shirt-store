"use client";

import { Toaster } from "sonner";
import type { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <QueryProvider>
          {children}
          <Toaster richColors position="top-right" />
        </QueryProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
