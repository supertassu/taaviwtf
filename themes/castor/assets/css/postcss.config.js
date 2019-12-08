// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

module.exports = {    
    plugins: [        
        require('postcss-import')(),
        require('tailwindcss')('./themes/castor/tailwind.config.js'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./themes/castor/layouts/**/*.html'],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html']
                }
            ],
            fontFace: true
        }),    
        require('postcss-nesting')(),
        require('autoprefixer')({
            grid: true
        }),
        require('postcss-reporter'),
    ]
}
