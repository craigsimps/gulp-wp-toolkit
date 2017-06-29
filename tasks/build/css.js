'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    normalize = require('node-normalize-scss').includePaths,
    bourbon = require('node-bourbon').includePaths,
    neat = require('node-neat').includePaths,
    postcss = require('gulp-postcss'),
    bulksass = require('gulp-sass-bulk-import'),
    mqpacker = require('css-mqpacker'),
    autoprefix = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    cssnano = require('cssnano'),
    banner = require('postcss-banner'),
    notify = require('gulp-notify');


module.exports = function() {
    var key,
        postProcessors,
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
            themeHeader += key + ': ' + config.theme[themeHeaderArr[key]]+ '\n';
        }
    }

    // Remove final new line character.
    themeHeader = themeHeader.slice(0, -1);

    postProcessors = [
        mqpacker({
            sort: true
        }),
        autoprefix(),
        pxtorem({
            root_value: 16,
            replace: false,
            media_query: true
        }),
        cssnano(),
        banner({
            banner: themeHeader
        })
    ];

    // Don't minify if expanded CSS is desired.
    if ( 'expanded' === config.css.outputStyle ) {
        postProcessors.splice(3, 1); // 3, as cssnano() is the 3rd item in the zero-based array above.
    }

    return gulp
        .src(config.src.scss)
        .pipe(bulksass)
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass.sync({
            outputStyle: config.css.outputStyle,
            includePaths: [].concat(bourbon, neat, normalize)
        }))
        .pipe(postcss(postProcessors))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(config.dest.css))
        .pipe(notify({message: config.messages.css}));
};
