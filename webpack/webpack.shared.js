var process = require("process")
var path = require("path")
var merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")

module.exports = {
  entry: ["react-hot-loader/patch", "./src/client/entry.js"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    publicPath: "/"
  },
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
  resolve: {
    extensions: [".js", ".jsx", ".css"]
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
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/client/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
