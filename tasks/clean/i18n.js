'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.i18n.dest + config.textdomain + '.pot'
    ], {force: true});
};
