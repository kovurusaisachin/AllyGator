const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   display: ["Inter", "system-ui", "sans-serif"],
    //   body: ["Inter", "system-ui", "sans-serif"]
    // },
    colors: {
      ...defaultTheme.colors,
    },
    extend: {
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        teal: colors.teal,
        blue: colors.sky,
        orange: colors.orange,
        violet: colors.violet,
        indigo: colors.indigo,
        red: colors.red,
        white: colors.white,
        gray: colors.gray
      }
    }
  },
  plugins: [],
}
