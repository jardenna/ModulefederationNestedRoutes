const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
  },

  cache: true,
  optimization: {
    minimize: true,
  },
});
