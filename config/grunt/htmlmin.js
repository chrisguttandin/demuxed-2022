module.exports = {
    default: {
        files: [
            {
                cwd: 'build/demuxed-2022/browser',
                dest: 'build/demuxed-2022/browser',
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
