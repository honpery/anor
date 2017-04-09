/**
 * webpack common config.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const siteRoot = exports.siteRoot = (...paths) => path.join(__dirname, '..', ...paths);

const prod = process.env.NODE_ENV === 'prod';

exports.config = {

    entry: {
        // anor: siteRoot('src/index.ts')
    },

    output: {
        path: siteRoot('dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: [siteRoot('node_modules')]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ].concat(prod ? [] : '@angularclass/hmr-loader')
            },
            {
                test: /\.scss$/,
                use: [
                    'to-string-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                }),
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },

    plugins: [
        new ExtractTextPlugin("app.css")
    ],

    watch: true

};