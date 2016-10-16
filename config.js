'use strict';

var pkg = require('./package.json'),
    path = require('path'),
    absPathToBower = path.resolve();

module.exports = {
    theme: {
        name: 'Genesis Starter Theme',
        homepage: pkg.homepage,
        description: pkg.description,
        author: pkg.author,
        version: pkg.version,
        licence: pkg.license,
        textdomain: pkg.name,
        template: 'genesis'
    },
    src: {
        php: '**/*.php',
        images: 'develop/images/**/*',
        css: 'develop/scss/**/*.scss',
        js: 'develop/js/**/*.js',
        json: '**/*.json',
        bower: absPathToBower

    },
    dest: {
        i18n: 'languages/',
        images: 'images/',
        css: '',
        js: 'js/',
        bowerjs: 'vendor/',
        bowercss: 'vendor/'
    },
    lintfiles: {
        scsslint: '.scss-lint.yml',
        jshint: 'jshintrc',
        jscs: '.jscsrc',
        phpcs: 'phpcs.xml',
        phpmd: 'phpmd.xml'
    },
    bump: {
      files: [
          './package.json',
          './composer.json'
      ]
    },
    messages: {
        css: 'Stylesheet compiled and saved.',
        i18n: 'Translation file generated.',
        images: 'Image files compressed and copied.',
        js: 'Javascript task complete.',
        potomo: 'PO files converted to MO files.',
        styleguide: 'Styleguide task complete.'
    },
    hologram: {
        config: 'hologram_config.yml'
    },
    i18n: {
        keywords: [
            '__:1,2d',
            '_e:1,2d',
            '_x:1,2c,3d',
            'esc_html__:1,2d',
            'esc_html_e:1,2d',
            'esc_html_x:1,2c,3d',
            'esc_attr__:1,2d',
            'esc_attr_e:1,2d',
            'esc_attr_x:1,2c,3d',
            '_ex:1,2c,3d',
            '_n:1,2,4d',
            '_nx:1,2,4c,5d',
            '_n_noop:1,2,3d',
            '_nx_noop:1,2,3c,4d'
        ]
    },
    js: {
        files: [
            'develop/js/main.js'
        ],
        filename: 'theme'
    },
    server: {
        url: 'library.dev'
    },
    css: {
        outputStyle: 'compressed'
    },
    bower: {
        jsfilename: 'vendor',
        cssfilename: 'vendor'
    }
};
