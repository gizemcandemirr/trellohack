const theme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#99c0ea",
        "primary-dark": "#3279c7",
        grayBar: {
          100: "#c8d1dc",
          200: "#ebecf0",
        },
      },
      backgroundImage: {
        'hero': "url('/sea.jpg')",
      }
     
    },
  },
  variants: {
  },
  plugins: [],
};