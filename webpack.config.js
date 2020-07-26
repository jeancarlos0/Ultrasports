const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'index.html'
        },),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'categories.html',
            template: 'categories.html'
        },),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'videos.html',
            template: 'videos.html'
        },),

    ],
    node: {
        fs: 'empty'
    }
    /*
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: require.resolve('babel-loader'),
                query: {
                    presets: [
                        'es2015'
                    ]
                }
            }
        ]
    }*/
};