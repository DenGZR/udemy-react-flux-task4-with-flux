var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var libs = require('../config').libs;
var order = require("gulp-order");

module.exports = function () {
    return gulp.src('dev/libs/**/*')
        .pipe(order(libs))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('prod/libs/'))
        .pipe(connect.reload());
};