'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.images.dest + '**/*'
    ], {force: true});
};
