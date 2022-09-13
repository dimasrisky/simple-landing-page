/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hijau': '#00f748',
        'gray': '#cfcfcf',    
        'white': '#F8FAFC',
        'background': '#fcfcfc',
        'card': '#f1f1f1',
      }
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg : '1124px',
        xl : '1124px',
        "2xl" : '1124px',
      },
    },
  },
  plugins: [],
}
