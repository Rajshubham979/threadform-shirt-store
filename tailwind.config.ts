import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-primary)",
        accent: "var(--color-secondary)",
        page: "var(--color-background)",
        surface: "var(--color-surface)",
        text: {
          DEFAULT: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)"
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)"
      },
      borderRadius: {
        brand: "var(--radius-base)",
        button: "var(--radius-button)",
        card: "var(--radius-card)"
      },
      maxWidth: {
        brand: "var(--layout-max-width)"
      },
      height: {
        nav: "var(--layout-nav-height)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
