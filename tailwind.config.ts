import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        cover: "1920 / 2150",
      },
      fontSize: {
        xs: ["15px", "20px"],
        sm: ["15px", "20px"],
        base: ["20px", "27px"],
        xl: ["20px", "30px"],
        "2xl": ["30px", "40px"],
        "3xl": ["40px", "50px"],
        "4xl": ["50px", "60px"],
      },
      fontFamily: {
        courier: ["var(--customCourier)"],
        main: ["var(--customMain)"],
        // sans: [
        //   "Inter",
        //   "-apple-system",
        //   "BlinkMacSystemFont",
        //   "Segoe UI",
        //   "Roboto",
        //   "Helvetica Neue",
        //   "Ubuntu",
        //   "sans-serif",
        // ],
      },
      colors: {
        // custom-One: "red"
      },
      height: {
        space: "calc(100vh - 60px)",
        // space: "200px",
      },
      cursor: {
        redPoint: "url(/images/cursore.png), auto",
      },
      boxShadow: {
        button: "0px 4px 10px 3px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
