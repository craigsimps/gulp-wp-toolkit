'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    bower = require('gulp-bower');

module.exports = function () {
    return bower();
};
