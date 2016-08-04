const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot)$/,
        loader: 'url-loader',
        query: {
          name: '[path][name].[ext]?[hash]',
          limit: 500,
        },
      }, {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass?sourceMap',
        ],
      }, {
        test: /\.css$/,
        loader: 'style!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    port: PORT,
    hot: true,
  },
  postcss: [
    require('autoprefixer'),
    require('precss'),
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],

};
