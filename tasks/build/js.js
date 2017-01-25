'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    map = require('lodash.map');

module.exports = function () {
    return map(config.js, function(files, filename) {
        return gulp
            .src(files)
            .pipe(concat(filename + '.js'))
            .pipe(gulp.dest(config.dest.js))
            .pipe(uglify())
            .pipe(rename(filename + '.min.js'))
            .pipe(gulp.dest(config.dest.js))
            .pipe(notify({message: config.messages.js}));
    });
};
