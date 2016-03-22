'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

gulp.task('default', () => {
  gutil.log('Gulp Running');
});

gulp.task("webpack:build", (callback) => {
  'use strict';

	let buildConfig = Object.create(webpackConfig);

	buildConfig.plugins = buildConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(buildConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack:build", err);
    }

		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));

		callback();
	});
});


gulp.task("webpack:build-debug", (callback) => {
  let debugConfig = Object.create(webpackConfig);
  debugConfig.devtool = "sourcemap";
  debugConfig.debug = true;

  let debugCompiler = webpack(debugConfig);

	debugCompiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack:build-dev", err);
    }

		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));

		callback();
	});
});
