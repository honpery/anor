/**
 * webpack dev config.
 */
const { config, root } = require('./webpack.config.common');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {

    devServer: {
        port: 6060,
        historyApiFallback: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: root('site/index.html'),
            excludeChunks: ['anor']
        })
    ]


});