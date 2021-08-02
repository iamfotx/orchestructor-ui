const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const presetConfig = require('./build-utils/load-presets');

const paths = {
  entryPath: path.resolve(process.cwd(), './src/index.tsx'),
  outputPath: path.resolve(process.cwd(), './dist'),
  templatePath: path.resolve(process.cwd(), './public/index.html'),
};

const getModeConfig = (mode) =>
  require(`./build-utils/webpack.${mode}`)(mode, paths);

const configOptions = (_, { mode = 'production', env: { presets } = {} }) =>
  merge(
    {
      entry: paths.entryPath,
      output: {
        filename: '[name].[contenthash].js',
        sourceMapFilename: '[name].[contenthash].map',
        chunkFilename: '[name].[contenthash].lazy-chunk.js',
        path: paths.outputPath,
        clean: true,
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader',
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: paths.templatePath,
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    getModeConfig(mode),
    presetConfig({ mode, presets }),
  );

module.exports = configOptions;
