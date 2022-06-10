module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
        fontFamily: {
          "open-sans": ['"Open Sans"', "sans-serif"]
      },
    },
    colors: {
      light: "#353535",
      dark: "#292929",
      darker: "#1d1d1d",
      darkest: "#121212",

      text: "#dddddd",
      gray: "#888888",
      blue: "#00479e",

      green: "#27FF36",
      red: "#FF2F2F"
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
