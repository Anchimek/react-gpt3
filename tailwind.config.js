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
        lightBlue: "#1B78DE",
        white: "#ffffff",
        gray: '#0E0E0E',
        black: '#000',
        orange: '#FF4820',
        salmon: '#FF8A71',
        turqoise: '#71E5FF'
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
      lgh: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};