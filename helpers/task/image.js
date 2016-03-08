var gulp = require('gulp');

module.exports = function() {
    return gulp.src('dev/img/**')
        .pipe(gulp.dest('prod/img/'));
};