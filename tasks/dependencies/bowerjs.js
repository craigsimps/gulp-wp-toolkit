'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    vendorFiles = require('bower-files')({
        cwd: config.src.bower
    }),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglify'),
    rename = require('gulp-rename');

module.exports = function () {
    return gulp
        .src(vendorFiles.ext('js').files)
        .pipe(concat(config.bower.jsfilename + '.js'))
        .pipe(gulp.dest(config.dest.bowerjs))
        .pipe(uglifyjs())
        .pipe(rename(config.bower.jsfilename + '.min.js'))
        .pipe(gulp.dest(config.dest.bowerjs));
};
