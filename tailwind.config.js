/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        coursive: ['"Baloo 2"', 'cursive'],
      },
      height: {
        3.5: '0.875rem',
      },
      minWidth: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}
