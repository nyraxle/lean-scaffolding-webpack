'use strict';

var path = require('path');

module.exports = {
  entry: './src/js/entry.js',
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src/js'),
        loader: 'babel-loader'
      }
    ]
  }
};
