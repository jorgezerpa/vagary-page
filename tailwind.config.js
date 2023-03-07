/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#141618"
    },
    screens: {
      'xs': '370px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        heroContent: 'heroContent 2s linear forwards 4s'
      },
      keyframes:{
        heroContent: {
          '0%': { opacity:0 },
          '100%': { opacity:1 }
        }
      }
    },
  },
  plugins: [],
}