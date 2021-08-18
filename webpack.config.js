
const path = require('path');
  //MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = {
  mode: `development`,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  //plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [/*MiniCssExtractPlugin.loader*/'style-loader', 'css-loader'],
      }
    ]
  }
};