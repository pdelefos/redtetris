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
