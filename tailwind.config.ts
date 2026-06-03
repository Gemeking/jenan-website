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
          red: "#DC2626",
          "red-dark": "#991B1B",
          "red-light": "#FEF2F2",
          "red-mid": "#FCA5A5",
          blue: "#2563EB",
          "blue-dark": "#1E40AF",
          "blue-light": "#EFF6FF",
          navy: "#0F172A",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)",
        "section-fade":
          "linear-gradient(180deg, #ffffff 0%, #F8FAFF 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "ken-burns": "kenBurns 12s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "cross-spin": "crossSpin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.04) translate(0%, 0%)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        crossSpin: {
          from: { transform: "rotateY(0deg) rotateX(5deg)" },
          to: { transform: "rotateY(360deg) rotateX(5deg)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
        "red-glow": "0 0 32px rgba(220,38,38,0.35)",
        "blue-glow": "0 0 24px rgba(37,99,235,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
