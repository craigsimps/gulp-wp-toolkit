'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    sort = require('gulp-sort'),
    potgen = require('gulp-wp-pot'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src(config.src.php)
        .pipe(sort())
        .pipe(potgen({
            domain: config.theme.textdomain,
            destFile: config.theme.textdomain + '.pot'
        }))
        .pipe(gulp.dest(config.dest.i18n))
        .pipe(notify({message: config.messages.i18n}));
};
