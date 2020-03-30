// gulp.task('replace_webpackJsonp', function() {
//     gulp.src(["./dist/micro-app-b.js"])
//       .pipe(replace('webpackJsonp', 'webpackJsonpB'))
//       .pipe(gulp.dest('./dist/micro-app-b.js'))
//   });
var gulp = require('gulp');
var replace = require('gulp-string-replace');

  function defaultTask(cb) {
    gulp.src(["./dist/micro-app-b/micro-app-b.js"])
    .pipe(replace('webpackJsonp', 'webpackJsonpB'))
    .pipe(gulp.dest('./dist'))
    
    cb();
  }
  
  exports.default = defaultTask;
