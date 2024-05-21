import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["15px", "20px"],
        sm: ["15px", "20px"],
        base: ["20px", "25px"],
        xl: ["10px", "20px"],
        "2xl": ["30px", "40px"],
        "3xl": ["40px", "50px"],
      },
      colors: {
        // custom-One: "red"
      },
      height: {
        space: "calc(100vh - 60px)",
        // space: "200px",
      },
    },
  },
  plugins: [],
};
export default config;
