const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
  },
  plugins: [new CleanWebpackPlugin()],
  cache: true,
  optimization: {
    minimize: true,
  },
});
