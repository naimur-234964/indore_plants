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
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" }
      },
      rotate:{
        "0%":{transform: "rotate(0deg)"},
        "100%":{transform: "rotate(360deg)"}      
      },
      scale:{
        "0%":{transform: "scale(0.8)"},
        "50%":{transform: "scale(1.2)"},
        "100%":{transform: "scale(0.8)"}
      }
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 10s linear infinite",
      scaleUp: "scale 3s linear infinite"
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

