var path = require('path');
var webpack = require('webpack');

var sharedConf = require('./webpack.shared')
var merge = require('webpack-merge')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(sharedConf, {
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
})
