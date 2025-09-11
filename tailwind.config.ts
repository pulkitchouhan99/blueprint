import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterTight"],
        interTight: ["InterTight"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: {
          light: "#F8EDEE",
          primary: "#DC3545",
          alert: "#E73002",
          dark: "#731120",
          soft: "#E5CDCD",
          extraLight: "#FAEFF0",
        },
        green: {
          primary: "#007749",
          light: "#D6EFD3",
        },
        yellow: {
          primary: "#F2A900",
        },
        blue: {
          light: "#D6E4E5",
          primary: "#2563EB",
          dark: "#1D4ED8",
          navy: "#004489",
        },
        grey: {
          50: "#FAFAFA",
          75: "#F5F5F5",
          100: "#F3F3F3",
          150: "#EBEBEB",
          200: "#E6E6E6",
          400: "#B9B9B9",
          450: "#949494",
          500: "#999999",
          600: "#757575",
          650: "#5C5C5C",
          700: "#626262",
          800: "#393939",
          900: "#3B3B3B",
          950: "#1C1C1C",
        },
        beige: {
          light: "#ECE5D2",
          extraLight: "#F4F3EC",
          putty: "#CABEB9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
