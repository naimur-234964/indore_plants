/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
      xxl: "1480px",
      xxxl: "1780px"
    },
    extend: {},
    fontFamily:{
      Jost:["Jost", "sans-serif"],
      Lobster:["Lobster", "sans-serif"]
    },
    container: {
      center: true,
      padding:{
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

