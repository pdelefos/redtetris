var path = require('path');
var webpack = require('webpack');

var sharedConf = require('./webpack.shared')
var merge = require('webpack-merge')

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(sharedConf, {
  devtool: 'source-map',

  modules: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
