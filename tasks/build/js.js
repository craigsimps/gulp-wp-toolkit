'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    sourcemap = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src(config.scripts.files)
        .pipe(sourcemap.init())
        .pipe(concat(config.scripts.filename + '.js'))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(uglify())
        .pipe(rename(config.scripts.filename + '.min.js'))
        .pipe(sourcemap.write())
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(notify({message: config.scripts.message}));
};
