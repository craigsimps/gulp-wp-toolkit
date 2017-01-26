'use strict';

var gulp = require('gulp'),
    pkg = require('./package.json'),
    toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
    theme: {
        name: 'Your Theme',
        themeuri: pkg.homepage,
        description: pkg.theme.description,
        author: pkg.author,
        authoruri: pkg.theme.authoruri,
        version: pkg.version,
        license: pkg.license,
        licenseuri: pkg.theme.licenseuri,
        tags: pkg.theme.tags,
        textdomain: pkg.name
        domainpath: pkg.theme.domainpath
        template: 'genesis'
    },
    dest: {
        bowerjs: 'develop/vendor/',
    },
    js: {
        'letters' : [
           'develop/js/a.js',
           'develop/js/b.js',
           'develop/js/c.js'
       ],
       'numbers' : [
           'develop/js/1.js',
           'develop/js/2.js'
       ],
       'standalone' : [
           'develop/js/standalone.js'
       ]
    },
    server: {
        url: 'example.dev'
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
