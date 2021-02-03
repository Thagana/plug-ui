const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'plug-ui.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module : {
    rules: [
        { test: /\.html$/i, use: 'html-loader' },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        { 
          test: /\.js$/i, use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/env', '@babel/preset-react']
              }
          }
      }
    ]
  }
};