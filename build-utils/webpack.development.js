module.exports = (_, paths) => ({
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.outputPath,
    hot: true,
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
