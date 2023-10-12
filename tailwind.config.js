/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackCustum01:"#1D1D1B",
        blackCustum02:"#242526",
        blackCustum03:"#3A3B3C",

      }
    },
  },
  plugins: [],
}