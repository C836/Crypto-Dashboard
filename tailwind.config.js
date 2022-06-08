module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
        fontFamily: {
          "open-sans": ['"Open Sans"', "sans-serif"]
      },
    },
    colors: {
      dark: "#292929",
      darker: "#1d1d1d",
      darkest: "#121212",

      text: "#dddddd",
      gray: "#888888",
      blue: "#03dac6",
      purple: "#c38fff",

      green: "#27FF36",
      red: "#FF2F2F"
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
