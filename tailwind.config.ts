import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F4F1",
        porcelain: "#FFFFFF",
        graphite: "#1F211F",
        ink: "#0D1110",
        moss: "#0F3D32",
        sage: "#6F837A",
        bronze: "#A7652A",
        mist: "#E2E7E2",
        clay: "#A7652A"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(25, 33, 29, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
