module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/demuxed-2022/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /demuxed-2022/ --configuration production --subresource-integrity'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/demuxed-2022/browser/**.map'
        },
        'verify': {
            cmd: `npx bundle-buddy build/demuxed-2022/browser/*.js.map && \
                grep -r build/demuxed-2022/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
