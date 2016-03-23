'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const eslint = require('gulp-eslint');

const paths = {
  source: './src/',
  dist: './dist'
};
paths.srcJS = paths.source + 'js/**/*.js';


gulp.task('default', () => {
  gutil.log('Gulp Running');
});

/*
  Lint
*/
gulp.task('lint:eslint', (callback) => {
  return gulp.src(paths.srcJS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result((result) => {
      var fileLog = gutil.colors.blue('ESLint for file:', result.filePath);
      var messageLog = gutil.colors.white.underline('# Messages:', result.messages.length);
      var warningLog = gutil.colors.white.underline('# Warnings:', result.warningCount);
      var errorLog = gutil.colors.white.underline('# Errors:', result.errorCount);
      gutil.log(fileLog + messageLog + warningLog + errorLog);
    }));
});

/*
  WebPack
*/
gulp.task('webpack:build', ['lint:eslint'], (callback) => {
  'use strict';

	let buildConfig = Object.create(webpackConfig);

	buildConfig.plugins = buildConfig.plugins.concat(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(buildConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));

		callback();
	});
});


gulp.task('webpack:build-debug', ['lint:eslint'], (callback) => {
  let debugConfig = Object.create(webpackConfig);
  debugConfig.devtool = 'sourcemap';
  debugConfig.debug = true;

  let debugCompiler = webpack(debugConfig);

	debugCompiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build-debug', err);
    }

		gutil.log('[webpack:build-debug]', stats.toString({
			colors: true
		}));

		callback();
	});
});
