import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dc: "#171717",
        },
      },
      minHeight: {
        0: "0",
        8: "2rem",
        16: "4rem",
        24: "6rem",
        64: "16rem",
        96: "24rem",
      },
      width: {
        68: "17rem",
      },
      fontFamily: {
        'space-grotesk': ["Space Grotesk", "sans-serif"],
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        5000: "5000ms",
      },
      animation: {
        slideShow: "slide-show 25s infinite linear alternate",
      },
      keyframes: {
        "slide-show": {
          "0%": { transform: "translateX(-50%)", overflow: "hidden" },
          "100%": { transform: "translateX(80%)", overflow: "hidden" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
