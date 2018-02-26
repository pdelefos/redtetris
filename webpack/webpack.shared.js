var process = require("process")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/client/index.html"
    })
  ]
}
