/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrefixWrap = require('postcss-prefixwrap');
const deps = require('./package.json').dependencies;

const prodMode = process.env.NODE_ENV === 'production';
const mode = 'development';
const target = 'web';

const plugins = [
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
];

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, 'dist'),
    filename: prodMode ? '[name].[contenthash].js' : '[name].js',
    // this places all images processed in an image folder
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devtool: 'source-map',

  devServer: {
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 4002,
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PrefixWrap('.app1'), 'autoPrefixer'],
              },
            },
          },
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  plugins,
  target,
};