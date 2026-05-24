import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { designConfig, designTokens } from "@/config/design.config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/components/providers/app-providers";

const brandName = designConfig.brand.name;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: brandName,
    template: `%s | ${brandName}`
  },
  description: `${brandName} brings oversized fits, sharper graphics, and youth-first streetwear energy into one storefront.`,
  openGraph: {
    title: brandName,
    description: `${brandName} streetwear for every rotation.`,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontQuery = `${designConfig.typography.fontFamily.replaceAll(" ", "+")}:wght@400;700&family=${designConfig.typography.headingFont.replaceAll(" ", "+")}:wght@400;700`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={`https://fonts.googleapis.com/css2?family=${fontQuery}&display=swap`} rel="stylesheet" />
      </head>
      <body style={designTokens as CSSProperties}>
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
