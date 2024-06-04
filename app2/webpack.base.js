/* eslint-disable import/newline-after-import */
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrefixWrap = require('postcss-prefixwrap');
const prodMode = process.env.NODE_ENV === 'production';
const deps = require('./package.json').dependencies;

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PrefixWrap('.app2'), 'autoPrefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: !prodMode ? '[name].css' : '[name].[contenthash].css',
    }),
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App2Index': './src/bootstrap',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
