import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        gray900: "#121214",
        gray800: "#202024",
        gray100: "#E1E1E6",
        gray200: "#A9A9B2",
        gray400: "#7C7C8A",
        gray500: "#505059",
        gray600: "#323238",
        gray700: "#29292E",

        green300: "#00B37E",
        green500: "#00875F",
        green700: "#015F43",
        green900: "#00291D",

        Black: "#000",
        Withe: "#fff",
      },
    },
  },
  plugins: [],
} satisfies Config;
