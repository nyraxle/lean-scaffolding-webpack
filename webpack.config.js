'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: './src/js/entry.js',
	output: {
    path: path.join(__dirname, 'dist/'),
		publicPath: "dist/",
    filename: 'bundle.js'
	},
	module: {
    loaders: [
      {
        test: path.join(__dirname, 'src/js'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
	},
	plugins: [
		new webpack.ProvidePlugin({
		})
	]
};
