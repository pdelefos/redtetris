const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/client/entry.js'],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
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
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              modules: true,
              importLoaders: 1
            }
          },
          { loader: 'postcss-loader' },
        ]
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/client/index.html',
    }),
  ],
  devServer: {
    contentBase: './src/client',
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    port: process.env["PORT"],
    host: process.env["IP"],
    public: "slt-poulet42.c9users.io",
    watchOptions: {
      ignored: /node_modules/
    }
  },
}
