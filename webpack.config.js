const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  entryPath: path.resolve(__dirname, './src/index.tsx'),
  outputPath: path.resolve(__dirname, './dist'),
  templatePath: path.resolve(__dirname, './public/index.html'),
};

const mode = process.env.NODE_ENV;

const isProduction = mode === 'production';
const target = isProduction ? 'browserslist' : 'web';

const webpackConfig = {
  mode,
  devtool: 'source-map', // 'inline-source-map',
  entry: PATHS.entryPath,
  target,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    sourceMapFilename: '[name].[contenthash].map',
    path: PATHS.outputPath,
    clean: true,
  },
  devServer: {
    contentBase: PATHS.outputPath,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Orchestructor UI',
      template: PATHS.templatePath,
    }),
    ...(isProduction ? [new MiniCssExtractPlugin()] : []),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};

module.exports = webpackConfig;
