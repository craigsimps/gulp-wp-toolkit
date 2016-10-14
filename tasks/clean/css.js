'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.styles.dest + '*.css',
        config.styles.dest + '*.css.map'
    ], {force: true});
};
