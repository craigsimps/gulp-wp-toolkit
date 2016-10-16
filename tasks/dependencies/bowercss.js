'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    vendorFiles = require('bower-files')({
        cwd: config.src.bower
    }),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del');

module.exports = function () {
    return gulp
        .src(vendorFiles.ext('css').files)
        .pipe(concat(config.bower.cssfilename + '.css'))
        .pipe(gulp.dest(config.dest.bowercss))
        .pipe(uglifycss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(rename(config.bower.cssfilename + '.min.css'))
        .pipe(gulp.dest(config.dest.bowercss));
};
