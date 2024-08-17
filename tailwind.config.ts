import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        primary: {
          DEFAULT: "#2ECC71",
          light: "#4BE488", // Optional lighter shade for hover states or backgrounds
          dark: "#28A65F",  // Optional darker shade for contrasts
        },
        secondary: {
          DEFAULT: "#3498DB",
          light: "#5DADE2", // Optional lighter shade
          dark: "#2A80B9",  // Optional darker shade
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F7F9F9", // Optional light background for sections
        },
        text: {
          DEFAULT: "#34495E", // Default text color
          light: "#7F8C8D",   // Optional lighter text for secondary information
        },
        accent: {
          DEFAULT: "#E67E22",
          light: "#F0B27A", // Optional lighter accent color
          dark: "#CA6F1E",  // Optional darker accent color
        },
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
} satisfies Config

export default config