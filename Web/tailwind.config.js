/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackCustum01:"#17181d",
        blackCustum02:"#292c35",
        blackCustum03:"#fcd9b",
        whitecustom:"#9E9E9E"

      }
    },
  },
  plugins: [],
}