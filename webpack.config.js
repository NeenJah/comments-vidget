
const path = require('path');

module.exports = {
  mode: `development`,
  entry: './src/modules/index.js',
  output: {
    path: path.resolve(__dirname, 'vidget'),
    filename: 'index.js',
  },
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
      }
    ]
  }
};
