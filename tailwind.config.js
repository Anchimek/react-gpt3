/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#040C18",
        secondary: "#81AFDD",
        darkBlue: "#042C54",
        white: "#ffffff",
        orange: '#FF4820'
      },
      fontFamily: {
        Manrope: ["Manrope", "normal"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1020px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};