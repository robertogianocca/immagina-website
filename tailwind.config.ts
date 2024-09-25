import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "custom-indent",
    "italic",
    // Add any other dynamic classes
  ],
  theme: {
    extend: {
      screens: {
        xs: "412px",
        "3xl": "1750px",
      },
      aspectRatio: {
        cover: "1920 / 2150",
        home: "4 / 3",
      },
      fontSize: {
        xs: ["13.89px", "19px"],
        sm: [
          "16.67px",
          {
            lineHeight: "21px",
            letterSpacing: "0.0em",
          },
        ],

        base: ["20px", "27px"],
        lg: ["24px", "normal"],
        xl: ["28.8px", "normal"],
        "2xl": ["34.56px", "normal"],
        "3xl": ["41.47px", "normal"],
        "4xl": ["49.77px", "normal"],
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
        customWhite: "#F8F8F8",
      },
      minHeight: {
        space: "calc(100vh - 60px)",
      },
      cursor: {
        redPoint: "url(/images/cursore.png), auto",
      },
      boxShadow: {
        button: "0px 4px 10px 3px rgb(0 0 0 / 0.1)",
        buttonTwo: "0px 4px 10px 3px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
