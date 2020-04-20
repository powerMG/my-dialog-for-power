/*
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-20 18:27:33
 * @LastEditTime: 2020-04-20 18:49:10
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './lib/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'bin'),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './lib/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'bin'),
    compress: true,
    port: 3000,
  },
}
