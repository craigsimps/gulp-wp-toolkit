'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    vendorFiles = require('bower-files')({
        cwd: config.dependencies.path
    }),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del');

module.exports = function () {
    return gulp
        .src(vendorFiles.ext('css').files)
        .pipe(concat(config.dependencies.cssfilename + '.css'))
        .pipe(gulp.dest(config.dependencies.cssoutput))
        .pipe(uglifycss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(rename(config.dependencies.cssfilename + '.min.css'))
        .pipe(gulp.dest(config.dependencies.cssoutput));
};
