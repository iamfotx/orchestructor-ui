const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  devtool: 'source-map',
  target: 'browserslist',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
