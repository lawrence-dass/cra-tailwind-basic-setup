module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      lato: ['Lato', 'Helvetica Neue', 'sans-serif'],
      openSans: ['Open Sans', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
