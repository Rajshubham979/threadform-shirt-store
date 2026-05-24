export type ButtonStyle = "solid" | "outline" | "ghost";
export type CardStyle = "shadow" | "bordered" | "flat";
export type NavStyle = "sticky" | "fixed" | "static";
export type HeroLayout = "centered" | "split" | "fullscreen";
export type LogoStyle = "digital";

export const designConfig = {
  brand: {
    name: "DH4NSHOO",
    logoStyle: "digital" as LogoStyle
  },
  colors: {
    primaryColor: "#121212",
    secondaryColor: "#c7ff3d",
    backgroundColor: "#f7f3ea",
    surfaceColor: "#fffdf8",
    textPrimary: "#111111",
    textSecondary: "#555555",
    borderColor: "#d6cfbf",
    errorColor: "#dc2626",
    successColor: "#15803d"
  },
  typography: {
    fontFamily: "Space Grotesk",
    headingFont: "Anton",
    baseFontSize: "16px",
    headingWeight: "700",
    bodyWeight: "400"
  },
  layout: {
    borderRadius: "10px",
    buttonRadius: "9999px",
    cardRadius: "16px",
    maxWidth: "1280px",
    navHeight: "78px"
  },
  components: {
    buttonStyle: "outline" as ButtonStyle,
    cardStyle: "bordered" as CardStyle,
    navStyle: "sticky" as NavStyle,
    heroLayout: "split" as HeroLayout
  },
  darkMode: {
    backgroundColor: "#0b0b0b",
    surfaceColor: "#121212",
    textPrimary: "#f5f5f5",
    textSecondary: "#9a9a9a",
    borderColor: "#252525"
  }
} as const;

export const designTokens = {
  "--color-primary": designConfig.colors.primaryColor,
  "--color-secondary": designConfig.colors.secondaryColor,
  "--color-background": designConfig.colors.backgroundColor,
  "--color-surface": designConfig.colors.surfaceColor,
  "--color-text-primary": designConfig.colors.textPrimary,
  "--color-text-secondary": designConfig.colors.textSecondary,
  "--color-border": designConfig.colors.borderColor,
  "--color-error": designConfig.colors.errorColor,
  "--color-success": designConfig.colors.successColor,
  "--font-body": designConfig.typography.fontFamily,
  "--font-heading": designConfig.typography.headingFont,
  "--font-size-base": designConfig.typography.baseFontSize,
  "--font-weight-heading": designConfig.typography.headingWeight,
  "--font-weight-body": designConfig.typography.bodyWeight,
  "--radius-base": designConfig.layout.borderRadius,
  "--radius-button": designConfig.layout.buttonRadius,
  "--radius-card": designConfig.layout.cardRadius,
  "--layout-max-width": designConfig.layout.maxWidth,
  "--layout-nav-height": designConfig.layout.navHeight
} as const;
