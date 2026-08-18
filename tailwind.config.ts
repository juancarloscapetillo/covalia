import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        covalia: {
          green: "#1D3A32",
          greenDark: "#112720",
          greenLight: "#2C5347",
          cream: "#F6EFE1",
          creamDark: "#EFE1C4",
          ochre: "#D08A3E",
          ochreDark: "#B06F2A",
          clay: "#9C6B52",
          slate: "#7C8B85",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
        popover: "0 10px 40px -10px rgb(0 0 0 / 0.25)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
