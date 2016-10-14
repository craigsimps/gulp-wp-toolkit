'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    jshint = require('gulp-jshint');

module.exports = function () {
    return gulp
        .src(config.scripts.src)
        .pipe(jshint(config.scripts.jshint))
        .pipe(jshint.reporter('default'));
};
