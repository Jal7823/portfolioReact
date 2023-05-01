/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBlack:'#212529',
        bgOrange:'#FF5733',
        bgWhite:'#E0E0E0',
        bgBlue:'#076678',
      },
      
    },
  },
  plugins: [],
}

