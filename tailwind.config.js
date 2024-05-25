/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1440px',
    },
    extend: {
      colors : {
      "primary" : "#2C7EF8",
      "text__body": "#141414",
      "back__body" : "#FFFFFF",
      "btn__hover" : "#075CD9",
      "back__card" : "#EBF3FE",
    },
    },
    
  },
  plugins: [],
}

