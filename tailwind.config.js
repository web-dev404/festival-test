/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
  black: '#000',
  white: '#fff',
  gray: '#999999',
  yellow: '#F3D100',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1875px' },
      xl: { max: '1300px' },
      lg: { max: '1000px' },
      md: { max: '800px' },
      sm: { max: '700px' },
      xs: { max: '600px' },
      xxs: { max: '480px' },
    },
    colors: {
      transparent: colors.transparent,
      ...constants,
      fontSize: {
        sm: '0.8rem',
        base: '4rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
}
