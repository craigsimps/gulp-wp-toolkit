'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    rtlcss = require('gulp-rtlcss'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');

module.exports = function () {
    return gulp.src('style.css')
        .pipe(rtlcss())
        .pipe(rename('rtl.css'))
        .pipe(replace(/\/\*#\ssourceMappingURL(.+)$/gm, ''))
        .pipe(gulp.dest(config.dest.css));
};
