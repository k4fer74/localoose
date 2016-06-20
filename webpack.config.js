var path    = require('path')
  , webpack = require('webpack');

module.exports = {
    entry: './src/localoose.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'localoose.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
