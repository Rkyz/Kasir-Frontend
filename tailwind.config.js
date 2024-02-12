/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Roboto' : 'Roboto, sans-serif',
      },
      colors:{
        'Yellow': '#F57B0F',
        'Gray': '#EBEBEB',
        'Blue': '#5846D1'
      }
    },
  },
  plugins: [],
}

