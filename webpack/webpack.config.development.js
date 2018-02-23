var webpack = require("webpack")
var merge = require("webpack-merge")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

var sharedConf = require("./webpack.shared")

module.exports = merge(sharedConf, {
  devServer: {
    contentBase: "../src/client",
    hot: true,
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
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
