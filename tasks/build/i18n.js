'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    sort = require('gulp-sort'),
    potgen = require('gulp-wp-pot'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src(config.i18n.src)
        .pipe(sort())
        .pipe(potgen({
            domain: config.i18n.textdomain,
            destFile: config.i18n.textdomain + '.pot'
        }))
        .pipe(gulp.dest(config.i18n.dest))
        .pipe(notify({message: config.i18n.message}));
};
