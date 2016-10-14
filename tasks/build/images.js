'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src(config.images.src)
        .pipe(changed(config.images.dest))
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest(config.images.dest))
        .pipe(notify({message: config.images.message}));
};
