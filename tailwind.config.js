/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf9eb',
          100: '#f7efca',
          200: '#f0dd98',
          300: '#e7c55d',
          400: '#deab31',
          500: '#c08b21',
          600: '#b2741c',
          700: '#8e551a',
          800: '#77441c',
          900: '#653a1e',
          950: '#522914',
        },
      },
    },
  },
  plugins: [],
}
