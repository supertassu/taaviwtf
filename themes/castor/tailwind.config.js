const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './posts/**/*.md',
    './themes/castor/**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        'max-md': {max: '768px'},
      },
      fontFamily: {
        mono: [
          '"Iosevka Taavi Web"',
          '"Iosevka Taavi"',
          '"Iosevka"',
          '"Iosevka Web"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        'gray': {
          ...colors.gray,
          '990': '#070707',
        },
        'true-gray': colors.trueGray,
      },
    },
    fontWeight: {
      // override available font weights to make sure only loaded
      // sizes are used - please keep in sync with styles.css
      'normal': 400,
      'bold': 700,
    },
  },
  variants: {},
  corePlugins: {
    // disable useless features that bloat generated CSS
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  },
  plugins: []
}
