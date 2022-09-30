module.exports = {
    default: {
        files: [
            {
                cwd: 'build/demuxed-2022',
                dest: 'build/demuxed-2022',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
