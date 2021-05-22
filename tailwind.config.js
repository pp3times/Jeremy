module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        main: {
          100: '#C0B2B2',
          200: '#A5878F',
          300: '#896378',
          400: '#6E4468',
          500: '#4B2A53',
          600: '#271637',
          700: '#0C081C',
        }
      },
      fontFamily: {
        quicksand: ['quicksand'],
        noto: ['Noto Sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
