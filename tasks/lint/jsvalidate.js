'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    jsvalidate = require('gulp-jsvalidate');

module.exports = function () {
    return gulp
        .src(config.scripts.src)
        .pipe(jsvalidate());
};
