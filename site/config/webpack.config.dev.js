/**
 * webpack dev config.
 */
const { config, siteRoot } = require('./webpack.config.common');
const merge = require('webpack-merge');
const { optimize } = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {

    entry: {
        main: siteRoot('src/main.ts'),
        polyfills: siteRoot('src/polyfills.ts'),
        vendor: siteRoot('src/vendor.ts')
    },

    devServer: {
        port: 6060,
        historyApiFallback: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: siteRoot('src/index.html'),
            chunksSortMode: 'auto'
        }),

        new optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
    ]


});