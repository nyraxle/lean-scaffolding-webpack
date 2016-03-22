'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');

gulp.task('default', () => {
  gutil.log('Gulp Running');
});

/*
 * Code Lint
 */
gulp.task('lint:jshint', () => {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint:eslint', () => {
  return gulp.src('source/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.results((results) => {
      console.log('Total Results: ' + results.length);
      console.log('Total Warnings: ' + results.warningCount);
      console.log('Total Errors: ' + results.errorCount);
    }));

});
