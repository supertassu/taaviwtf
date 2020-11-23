module.exports = {
  purge: [
    './themes/castor/**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        'max-md': {max: '768px'},
      },
      fontFamily: {
        mono: [
          '"Iosevka Web"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  variants: {},
  plugins: []
}
