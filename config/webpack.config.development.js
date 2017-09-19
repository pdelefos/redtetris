var path = require('path');

var webpack = require('webpack');
var sharedConf = require('./webpack.shared')
var merge = require('webpack-merge')

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
}

// var x = merge(conf, sharedConf)
