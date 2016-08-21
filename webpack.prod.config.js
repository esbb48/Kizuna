const path = require('path');
const webpack = require('webpack');
const ignore = new webpack.IgnorePlugin(/\.svg$/);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'build');
const buildAssetsFolderName = 'assets';
const GLOBALS = {
  'process.env.NODE_ENV': '"production"',
};

module.exports = {
  debug: false,
  devtool: false,
  entry: {
    main: './src/index.js',
    vendor: [
      'babel-polyfill', 'react', 'react-dom', 'redux', 'redux-saga',
      'react-redux', 'react-router', 'react-router-redux', 'isomorphic-fetch', 'classnames',
    ],
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: '[name].[chunkhash:6].js',
    chunkFilename: '[name].[chunkhash:6].[ext]',
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loader: 'babel',
        exclude: [nodeModulesDir],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot)$/,
        loader: 'url',
        include: [
          path.resolve(__dirname, 'src/assets'),
        ],
        query: {
          context: './src/assets/',
          name: [buildAssetsFolderName, '[path][name].[hash:base64:6].[ext]'].join('/'),
          limit: 500,
        },
      },
      {
        // this one is for loading vendor assets
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot)$/,
        loader: 'url',
        include: [
          path.resolve(nodeModulesDir, 'vis/dist/'),
          path.resolve(nodeModulesDir, 'video.js/dist/'),
        ],
        query: {
          context: nodeModulesDir,
          name: [buildAssetsFolderName, 'vendor', '[path][name].[hash:base64:6].[ext]'].join('/'),
          limit: 500,
        },
      },
    ],
  },
  postcss: [
    require('autoprefixer'),
    require('precss'),
  ],
  plugins: [
    ignore,
    new webpack.DefinePlugin(GLOBALS),
    new WebpackMd5Hash(),
    new ExtractTextPlugin('main.[contenthash:6].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
};
