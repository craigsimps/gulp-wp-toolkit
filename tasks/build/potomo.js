'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    potomo = require('gulp-potomo');

module.exports = function () {
    return gulp
        .src([config.i18n.dest + '*.po'])
        .pipe(potomo({
            poDel: true
        }))
        .pipe(gulp.dest(config.i18n.dest));
};
