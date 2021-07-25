const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  entryPath: path.resolve(__dirname, './src/index.tsx'),
  outputPath: path.resolve(__dirname, './dist'),
  templatePath: path.resolve(__dirname, './public/index.html')
}

const isProduction =  process.env.NODE_ENV === "production";

const webpackConfig = {
  mode: 'development',
  devtool: 'source-map', // 'inline-source-map',
  entry: PATHS.entryPath,
  target: isProduction ? "browserslist" : "web",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js"
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
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Orchestructor UI',
      template: PATHS.templatePath,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
        }
    ],
  },
}

module.exports = webpackConfig
