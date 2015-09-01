'use strict';

var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var jade        = require('gulp-jade');
var webserver   = require('gulp-webserver');

var config = {
  jade: {
    pretty : true
  },
  webserver: {
    livereload: true,
    host      : '0.0.0.0',
    open      : 'http://localhost:3000/',
    port      : 3000
  }
};

gulp.task('stylus', function() {
  return gulp.src('./src/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./test/'));
});

gulp.task('jade', ['stylus'], function() {
  return gulp.src('./src/index.jade')
    .pipe(jade(config.jade))
    .pipe(gulp.dest('./test/'));
});

gulp.task('webserver', ['jade'], function() {
  return gulp.src('./test/')
    .pipe(webserver(config.webserver));
});

gulp.task('default', ['webserver'], function() {
  gulp.watch(['./src/*.styl'], ['stylus']);
  gulp.watch(['./src/*.jade'], ['jade']);
});
