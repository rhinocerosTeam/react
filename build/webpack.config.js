/**
 * Created by songpeilan on 2017/11/26.
 */
const path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: path.resolve(__dirname , '../src/app.js'),
    output: {
        path: path.resolve(__dirname , '../dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};
