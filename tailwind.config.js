/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fcf8ea',
          100: '#f8f0c9',
          200: '#f2df96',
          300: '#eac65a',
          400: '#e2ae2d',
          500: '#d59920',
          600: '#b57519',
          700: '#915417',
          800: '#79441a',
          900: '#67391c',
          950: '#592b12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        coursive: ['Baloo 2', 'cursive'],
      },
    },
  },
  plugins: [],
}
