const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

/** order rule

[a-z] && exclude 4 major key.

entry,
output,
module,
plugins,

**/

module.exports = {
  context: resolve(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.hot.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(`${__dirname}/dist`),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot)$/,
        loader: 'url-loader',
        query: {
          context: './src/assets/',
          name: ['assets', '[path][name].[hash:base64:6].[ext]'].join('/'),
          limit: 500,
        },
      }, {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?sourceMap',
        ],
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
