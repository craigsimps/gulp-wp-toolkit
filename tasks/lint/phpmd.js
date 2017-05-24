'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    phpmd = require('gulp-phpmd-plugin');

module.exports = function () {

    var configFile,
        themeConfigFile = config.lintfiles.phpmd;

    configFile = path.join(__dirname, '../../lintfiles/', 'phpmd.xml');

    if (fs.existsSync(themeConfigFile)) {
        configFile = themeConfigFile;
    }

    if (fs.existsSync(themeConfigFile + '.dist')) {
        configFile = themeConfigFile + '.dist';
    }

    return gulp
        .src(config.src.php)
        .pipe(phpmd({
            format: 'text',
            ruleset: configFile
        }))
        .pipe(phpmd.reporter('log'));
};
