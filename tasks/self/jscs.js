'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    jscs = require('gulp-jscs');

module.exports = function () {
    return gulp
        .src(config.self.src)
        .pipe(jscs({
            configPath: config.self.jscs
        }));
};
