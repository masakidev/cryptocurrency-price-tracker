module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        personalwhite: '#F2F2F2',
        personalverydarkgreen: '#030C26',
        personaldarkgreen: '#2D2E40',
        personalgreen: '#F2F2F2',
        personalpurple: '#7D5CF2',
        personaldarkpurple: '#2B2240',
      },
      fontFamily: {
        sourcesanspro: 'Source Sans Pro',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
