/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Fira Sans', 'sans-serif'],
        },
        colors: {
          'blue-dark': 'rgb(14,36,71)',
          'blue-mid': 'rgba(38,36,80,1)',
          'blue-light': 'rgb(86,123,182)',
          'gray-light': 'rgba(229,229,229,1)',
        },
    },
  },
  plugins: [],
}

