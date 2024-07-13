/** @type {import('tailwindcss').Config} */



module.exports = {
  darkMode: "class",
  content: ["./public/*.{html,js}", "./src/js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        100: "#ECE0D1",
        300: "#DBC1AC",
        600: "#967259",
        900: "#634832",
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url(../utils/image/background/background-kitchen.jpg)",
        "home-desktop": "url(../utils/image/background/background-kitchen.jpg)",
        "kitchenware": "url(../utils/image/background/Kitchenware.jpg)",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
  plugins: [
    require('./plugins/child.js'),
  ],
}

