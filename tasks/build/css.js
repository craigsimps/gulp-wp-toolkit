'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    normalize = require('node-normalize-scss').includePaths,
    neat = require('node-neat').includePaths,
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    autoprefix = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    notify = require('gulp-notify');

module.exports = function () {
    var postProcessors = [
        mqpacker({
            sort: true
        }),
        autoprefix(),
        pxtorem({
            root_value: 16,
            replace: false,
            media_query: true
        })
    ];

    return gulp
        .src(config.styles.src)
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass.sync({
            outputStyle: config.styles.output,
            includePaths: [].concat(normalize, neat)
        }))
        .pipe(postcss(postProcessors))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(notify({message: config.styles.message}));
};
