import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        foreground: "#f5f5f7",
        card: {
          DEFAULT: "rgba(17, 17, 25, 0.65)",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
        },
        brand: {
          purple: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            glow: "#8b5cf6",
          },
          cyan: {
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            glow: "#06b6d4",
          },
          rose: {
            500: "#f43f5e",
            600: "#e11d48",
          },
          emerald: {
            500: "#10b981",
            600: "#059669",
          },
          amber: {
            500: "#f59e0b",
            600: "#d97706",
          }
        },
        border: "rgba(255, 255, 255, 0.08)",
        ring: "rgba(139, 92, 246, 0.5)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.1) 0px, transparent 50%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-glow": "0 8px 32px 0 rgba(139, 92, 246, 0.15)",
        "neon-cyan": "0 0 15px rgba(6, 182, 212, 0.4)",
        "neon-purple": "0 0 15px rgba(139, 92, 246, 0.4)",
      },
      backdropBlur: {
        "glass": "12px",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 4s",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
