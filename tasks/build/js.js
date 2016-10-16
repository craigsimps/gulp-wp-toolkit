'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    sourcemap = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src(config.js.files)
        .pipe(sourcemap.init())
        .pipe(concat(config.js.filename + '.js'))
        .pipe(gulp.dest(config.dest.js))
        .pipe(uglify())
        .pipe(rename(config.js.filename + '.min.js'))
        .pipe(sourcemap.write())
        .pipe(gulp.dest(config.dest.js))
        .pipe(notify({message: config.messages.js}));
};
