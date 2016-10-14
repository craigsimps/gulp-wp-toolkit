'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    phpcs = require('gulp-phpcs');

module.exports = function () {
    return gulp
        .src([config.code.src])
        .pipe(phpcs({
            standard: config.code.standard,
            warningSeverity: 0
        }))
        .pipe(phpcs.reporter('log'));
};
