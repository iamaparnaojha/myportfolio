/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08080a",
        ivory: "#f4f0e8",
        mute: "#b7b1a8",
        violet: "#c9b8ff",
        gold: "#e4c99a",
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"Avenir Next"', '"Helvetica Neue"', "sans-serif"],
        display: ['"Iowan Old Style"', '"Palatino Linotype"', "Palatino", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
