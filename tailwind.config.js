/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm luxury patisserie palette (interpreted from Ambrozia's warm,
        // dessert-forward brand — cream, caramel, cocoa, blush).
        cream: "#FBF6EF",
        linen: "#F4ECE0",
        sand: "#E9DAC6",
        clay: "#DCC6AC",
        espresso: "#2A2019",
        cocoa: "#5A4432",
        mocha: "#7A6350",
        caramel: {
          DEFAULT: "#B96F3D",
          deep: "#9A5A30",
          light: "#D89A6A",
        },
        blush: "#E7C3B8",
        rose: "#C98C82",
        gold: "#C6A15B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.14em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(58, 40, 25, 0.35)",
        lift: "0 30px 70px -30px rgba(58, 40, 25, 0.45)",
        glass: "0 8px 32px -8px rgba(42, 32, 25, 0.25)",
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(120% 120% at 50% 0%, #FBF6EF 0%, #F4ECE0 45%, #E9DAC6 100%)",
        "caramel-sheen":
          "linear-gradient(135deg, #D89A6A 0%, #B96F3D 45%, #9A5A30 100%)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
