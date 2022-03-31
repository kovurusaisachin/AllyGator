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
      backgroundImage: theme => ({
        'gator-pattern': "url('https://i.pinimg.com/originals/79/ae/30/79ae3050000579337f79c78e8ad2e6eb.jpg')",
       }),
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        teal: colors.teal,
        blue: colors.sky,
        green: colors.green,
        yellow: colors.yellow,
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
