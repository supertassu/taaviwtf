// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor

module.exports = {
    plugins: [
        require('tailwindcss')('./themes/castor/tailwind.config.js'),
        require('postcss-nesting')(),
    ]
}
