var process = require('process')
var path = require('path');
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sharedConfig = {
  entry: ['react-hot-loader/patch', './src/client/entry.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.NODE_ENV === "production",
              modules: true,
              importLoaders: 1,

            }
          },
          { loader: 'postcss-loader' },
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/client/index.html',
    })
  ]
}

var resolvedEnv = process.env.NODE_ENV || "development"
var envConfig = require(`./webpack.config.${resolvedEnv}`);

module.exports = merge(sharedConfig, envConfig);