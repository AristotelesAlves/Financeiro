/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        blackWeight1:'#202022',
        blackWeight2:'#2E2F33',
        blackWeight3:'#393A3F',
        blueWeight1:'#4E7497'
      }
    },
  },
  plugins: [],
}

