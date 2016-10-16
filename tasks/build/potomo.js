'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    potomo = require('gulp-potomo'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp
        .src([config.dest.php + '*.po'])
        .pipe(potomo({
            poDel: true
        }))
        .pipe(gulp.dest(config.dest.i18n))
        .pipe(notify({message: config.messages.potomo}));
};
