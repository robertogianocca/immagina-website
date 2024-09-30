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
      // fontSize: {
      //   xs: ["13.89px", "19px"],
      //   sm: [
      //     "16.67px",
      //     {
      //       lineHeight: "22px",
      //       letterSpacing: "0.0em",
      //     },
      //   ],

      //   base: ["20px", "27px"],
      //   lg: ["24px", "normal"],
      //   xl: ["28.8px", "normal"],
      //   "2xl": ["34.56px", "normal"],
      //   "3xl": ["41.47px", "normal"],
      //   "4xl": ["49.77px", "normal"],
      // },
      fontSize: {
        xs: ["0.868rem", "1.1875rem"], // 13.89px -> 0.868rem, 19px -> 1.1875rem
        sm: [
          "1.042rem", // 16.67px -> 1.042rem
          {
            lineHeight: "1.375rem", // 22px -> 1.375rem
            letterSpacing: "0.0em",
          },
        ],
        base: ["1.25rem", "1.6875rem"], // 20px -> 1.25rem, 27px -> 1.6875rem
        lg: ["1.5rem", "normal"], // 24px -> 1.5rem
        xl: ["1.8rem", "normal"], // 28.8px -> 1.8rem
        "2xl": ["2.16rem", "normal"], // 34.56px -> 2.16rem
        "3xl": ["2.592rem", "normal"], // 41.47px -> 2.592rem
        "4xl": ["3.11rem", "normal"], // 49.77px -> 3.11rem
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
