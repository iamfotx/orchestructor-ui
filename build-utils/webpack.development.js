module.exports = (_, paths) => ({
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    // hot: true,
    liveReload: true,
    // watchFiles: paths.outputPath,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
});
