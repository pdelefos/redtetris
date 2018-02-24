var webpack = require("webpack")
var merge = require("webpack-merge")
var path = require("path")

var sharedConf = require("./webpack.shared")

module.exports = merge(sharedConf, {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        include: /src\/client/,
        loaders: "style-loader!css-loader"
      }
    ]
  },
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
})
