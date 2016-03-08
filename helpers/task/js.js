var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

module.exports = function () {
    return gulp.src('dev/js/*.*')
        //.pipe(concat('main.js'))
        .pipe(gulp.dest('prod/js/'))
        .pipe(connect.reload());
};