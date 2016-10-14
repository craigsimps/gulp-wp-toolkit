'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    scsslint = require('gulp-scss-lint');

module.exports = function () {
    return gulp
        .src(config.styles.src)
        .pipe(scsslint({
            'config': config.styles.lint
        }));
};
