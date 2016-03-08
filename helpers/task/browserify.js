var source = require('vinyl-source-stream');
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

module.exports = function () {
    var props = {
        entries: ['./dev/jsx/app.js'],
        debug: true,
        cache: {},
        packageCache: {},
        transform: [reactify]
    };
    return browserify(props)
            .bundle()
            .pipe(source('main.min.js'))
            .pipe(streamify(uglify('main.min.js')))
            .pipe(gulp.dest('./dev/js/'));
};