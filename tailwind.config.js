/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        coursive: ['"Baloo 2"', 'cursive'],
      },
      height: {
        3.5: '0.875rem',
      }
    },
  },
  plugins: [],
}
