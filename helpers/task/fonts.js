var gulp = require('gulp');

module.exports = function () {
    return gulp.src('dev/fonts/**')
        .pipe(gulp.dest('prod/fonts'))
};