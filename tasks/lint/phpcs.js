'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    phpcs = require('gulp-phpcs');

module.exports = function () {

    var configFile,
        themeConfigFile = config.lintfiles.phpcs;

    configFile = path.join(__dirname, '../../lintfiles/', 'phpcs.xml');

    if (fs.existsSync(themeConfigFile)) {
        configFile = themeConfigFile;
    }

    if (fs.existsSync(themeConfigFile + '.dist')) {
        configFile = themeConfigFile + '.dist';
    }

    return gulp
        .src(config.src.php)
        .pipe(phpcs({
            standard: configFile,
            warningSeverity: 0
        }))
        .pipe(phpcs.reporter('log'));
};
