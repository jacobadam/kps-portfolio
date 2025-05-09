/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xxs: "378px",
      xs: "540px",
      "short-lg": { raw: "(min-width: 1024px) and (max-height: 766px)" },
    },
    extend: {
      colors: {
        portfolio: "#172754",
      },
    },
  },
  plugins: [],
};
