/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        devgreen: "#5DDDB4",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
          anton: ['Anton', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          dmsans: ['DM Sans', 'sans-serif'],
          crimson: ['Crimson Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
