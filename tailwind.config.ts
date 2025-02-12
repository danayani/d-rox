import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        RobotoSlab:["Roboto Slab"]

      },
      colors: {
        LightGray: "#A0AEC0",
        Purple: "#8860FF",
        PurpleBlue:"#6A38FF",
        Blue: "#122c75",
        DarkBlue: "#0A1F59",
        LightGreen: "#B7F763",
      },
    },
  },
  plugins: [],
} satisfies Config;
