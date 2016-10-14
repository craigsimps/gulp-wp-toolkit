'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    vendorFiles = require('bower-files')({
        cwd: config.dependencies.path
    }),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglify'),
    rename = require('gulp-rename');

module.exports = function () {
    return gulp
        .src(vendorFiles.ext('js').files)
        .pipe(concat(config.dependencies.jsfilename + '.js'))
        .pipe(gulp.dest(config.dependencies.jsoutput))
        .pipe(uglifyjs())
        .pipe(rename(config.dependencies.jsfilename + '.min.js'))
        .pipe(gulp.dest(config.dependencies.jsoutput));
};
