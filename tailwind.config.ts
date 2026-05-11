import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:    "#0D0D0D",
          charcoal: "#1A1A1A",
          dark:     "#111111",
          cream:    "#F5F0E8",
          muted:    "#A89F91",
          accent:   "#2563EB",   // primary blue CTA
          gold:     "#C8A96E",   // warm gold accent
          border:   "#2A2A2A",
        },
        status: {
          pending:   "#6B7280",
          progress:  "#2563EB",
          completed: "#10B981",
        },
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in":      "fadeIn 0.6s ease forwards",
        "slide-up":     "slideUp 0.6s ease forwards",
        "pulse-slow":   "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
