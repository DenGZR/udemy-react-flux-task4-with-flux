var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var less = require('gulp-less');


module.exports = function () {

    return gulp.src('dev/less/style.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('prod/css'))
        .pipe(connect.reload());
};
