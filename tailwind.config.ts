import type { Config } from "tailwindcss";

const themed = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: themed("paper"),
        porcelain: themed("porcelain"),
        surfaceElevated: themed("surface-elevated"),
        graphite: themed("graphite"),
        ink: themed("ink"),
        moss: themed("moss"),
        brandSolid: themed("brand-solid"),
        deep: themed("deep"),
        sage: themed("sage"),
        bronze: themed("bronze"),
        mist: themed("mist"),
        line: themed("line"),
        clay: themed("bronze")
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgb(var(--shadow-color) / 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
