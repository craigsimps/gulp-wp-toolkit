'use strict';

var gulp = require('gulp'),
    pkg = require('./package.json'),
    toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
    theme: {
        name: 'Craig Simpson Theme',
        homepage: pkg.homepage,
        description: pkg.description,
        author: pkg.author,
        version: pkg.version,
        license: pkg.license,
        textdomain: pkg.name
    },
    js: {
        files: [
            'develop/vendor/vendor.js',
            'develop/js/responsive-menu.js',
            'develop/js/main.js'
        ]
    },
    server: {
        url: 'craigsimpson.dev'
    }
});

toolkit.extendTasks(gulp, {
    // Task Name.
    console: [
        ['build'],
        function () {
            console.log('This is an extended task. It depends on `build`');
        }
    ]
});
