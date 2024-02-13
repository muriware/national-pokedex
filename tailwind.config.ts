import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "390px",
        "md": "640px",
        "lg": "900px",
        "xl": "1112px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
