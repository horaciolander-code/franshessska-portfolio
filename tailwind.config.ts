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
        crimson: "#A62447",
        burdeos: "#73434F",
        crema: "#E8DDD4",
        rosa: "#BF9288",
        marron: "#8C5858",
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["var(--font-script)", "Italianno", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
