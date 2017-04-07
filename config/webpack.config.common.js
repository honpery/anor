/**
 * webpack common config.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = exports.root = (...paths) => path.join(__dirname, '..', ...paths);

exports.config = {

    entry: {
        anor: root('src/index.ts')
    },

    output: {
        path: root('dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: [root('node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                }),
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },

    plugins: [
        new ExtractTextPlugin(".css")
    ],

    watch: true

};