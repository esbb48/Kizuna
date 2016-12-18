const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const GLOBALS = {
  'process.env.NODE_ENV': '"production"',
};

/** order rule

[a-z] && exclude 4 major key.

entry,
output,
module,
plugins,

**/

module.exports = {
  context: resolve(__dirname, 'src'),
  devtool: false,
  resolve: {
    extensions: ['.js', '.scss'],
  },
  entry: {
    main: './index.js',
    vendor: [
      'babel-polyfill', 'react', 'react-dom', 'react-redux',
      'react-router', 'react-router-redux', 'redux', 'redux-action', 'redux-saga',
    ],
  },
  output: {
    chunkFilename: '[name].[chunkhash:6].[ext]',
    filename: '[name].[chunkhash:6].js',
    path: resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].[chunkhash:6].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new WebpackMd5Hash(),
    new ExtractTextPlugin('main.[contenthash:6].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ]
};
