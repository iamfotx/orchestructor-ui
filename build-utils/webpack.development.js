module.exports = () => ({
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
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
