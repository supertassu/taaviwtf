module.exports = {
    plugins: [
        require('tailwindcss')('./themes/castor/tailwind.config.js'),
        require('postcss-nesting')(),
    ]
};
