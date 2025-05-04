import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "#000000", // Use custom black for strong contrast
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "#000000", // Use custom black for strong contrast
        },
        white: "#FFFFFF",
        "marian-blue": "#2C4278",
        "ghost-white": "#E7E9F1",
        "african-violet": "#9A70AE",
        "columbia-blue": "#B9D9E9",
        contrast: "#000000", // Custom black for contrast
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
