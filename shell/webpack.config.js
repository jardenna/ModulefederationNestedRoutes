/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrefixWrap = require('postcss-prefixwrap');

const prodMode = process.env.NODE_ENV === 'production';
const mode = 'development';
const deps = require('./package.json').dependencies;

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: !prodMode ? '[name].css' : '[name].[contenthash].css',
  }),
  new ModuleFederationPlugin({
    name: 'shell',
    remotes: {},
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
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: prodMode ? '[name].[contenthash].js' : '[name].js',
    publicPath: 'auto',
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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    compress: true,
    port: 4000,
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
                plugins: [PrefixWrap('.shell'), 'autoPrefixer'],
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
          filename: './fonts/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  plugins,
};
