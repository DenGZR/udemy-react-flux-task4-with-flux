var gulp = require('gulp');
var connect = require('gulp-connect');

module.exports = function () {
    return gulp.src('dev/index.html')
        .pipe(gulp.dest('prod/'))
        .pipe(connect.reload());
};