'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.i18n + config.theme.textdomain + '.pot'
    ], {force: true});
};
