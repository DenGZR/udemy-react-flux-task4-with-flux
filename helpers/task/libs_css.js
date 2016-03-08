var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');

module.exports = function () {
    return gulp.src('dev/libs_css/*.css')
        .pipe(concat('libs_style.css'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('prod/css/'))
        .pipe(connect.reload());
};