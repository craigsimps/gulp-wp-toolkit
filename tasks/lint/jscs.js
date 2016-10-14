'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    jscs = require('gulp-jscs');

module.exports = function () {
    return gulp
        .src(config.scripts.src)
        .pipe(jscs({
            configPath: config.scripts.jscs
        }));
};
