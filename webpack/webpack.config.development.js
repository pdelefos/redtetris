var webpack = require('webpack');
var merge = require('webpack-merge')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sharedConf = require('./webpack.shared')

module.exports = merge(sharedConf, {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: './src/client',
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
