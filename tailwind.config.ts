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
      keyframes: {
        fadeIn: {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-out": "fadeOut 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
