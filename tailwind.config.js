/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url('/assets/blur-background.jpg')",
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      containers: {
        '2xs': '13rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        alt: ['"Baloo 2"', 'sans-serif'],
      },
      height: {
        3.5: '0.875rem',
      },
      width: {
        22: '5.5rem',
      },
      minWidth: {
        88: '22rem',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
