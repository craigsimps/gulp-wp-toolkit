'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    normalize = require('node-normalize-scss').includePaths,
    postcss = require('gulp-postcss'),
    bulksass = require('gulp-sass-bulk-import'),
    mqpacker = require('css-mqpacker'),
    autoprefix = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    cssnano = require('cssnano'),
    banner = require('postcss-banner'),
    notify = require('gulp-notify'),
    map = require('lodash.map'),
    rename = require('gulp-rename');


module.exports = function() {

    var buildThemeHeader = function () {
        var key,
            themeHeader = '',
            themeHeaderArr = {
                // 'Header Name': 'Key under config.theme',
                'Theme Name': 'name',
                'Theme URI': 'themeuri',
                Author: 'author',
                'Author URI': 'authoruri',
                Description: 'description',
                Version: 'version',
                Status: 'status',
                License: 'license',
                'License URI': 'licenseuri',
                Tags: 'tags',
                'Text Domain': 'textdomain',
                'Domain Path': 'domainpath',
                Template: 'template'
            };

        // Loop through above object properties.
        for ( key in themeHeaderArr ) {
            // If a value has been set in config.theme.???, ...
            if ( config.theme[themeHeaderArr[key]] ) {
                // Then build the file header for it.
                themeHeader += key + ': ' + config.theme[themeHeaderArr[key]] + '\n';
            }
        }

        if ( config.theme.notes ) {
            themeHeader += '\n' + config.theme.notes;
        }

        // Remove final new line character.
        themeHeader = themeHeader.slice(0, -1);

        return themeHeader;
        }

    var getPostProcessors = function (outputConfig, outputFilename) {

        var themeHeader,
            postProcessors = [
                mqpacker({
                    sort: true
                }),
                autoprefix(),
                pxtorem({
                    root_value: config.css.basefontsize,
                    replace: false,
                    media_query: true
                }),
            ];

        // Add CSS Nano to further compress our output..
        if ( 'compressed' === outputConfig.outputStyle ) {
            postProcessors.push(cssnano());
        }

        // If we're working on the main style.css, output the theme header.
        if ( 'style' === outputFilename ) {
            themeHeader = buildThemeHeader();
            postProcessors.push(banner({
                banner: themeHeader
            }));
        }
     
        return postProcessors;

    };

    return map(config.css.scss, function(outputConfig, outputFilename) {
        return gulp
        .src(outputConfig.src)
        .pipe(bulksass())
        .pipe(plumber())
        .pipe(rename(outputFilename + '.css'))
        .pipe(sourcemap.init())
        .pipe(sass.sync({
            outputStyle: outputConfig.outputStyle,
            includePaths: [].concat(normalize)
        }))
        .pipe(postcss(getPostProcessors(outputConfig, outputFilename)))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest(outputConfig.dest))
        .pipe(notify({message: config.messages.css}));
    });
};
