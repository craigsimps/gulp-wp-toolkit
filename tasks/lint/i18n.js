'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    checktextdomain = require('gulp-checktextdomain');

module.exports = function () {
    return gulp
        .src(config.i18n.src)
        .pipe(checktextdomain({
            text_domain: config.i18n.textdomain,
            keywords: config.i18n.keywords
        }));
};
