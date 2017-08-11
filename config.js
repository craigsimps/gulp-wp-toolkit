'use strict';

var path = require('path')

module.exports = {
    src: {
        php: ['**/*.php', '!vendor/**'],
        images: 'develop/images/**/*',
        scss: 'develop/scss/**/*.scss',
        css: ['**/*.css', '!node_modules/**', '!develop/vendor/**'],
        js: ['develop/js/**/*.js', '!node_modules/**'],
        json: ['**/*.json', '!node_modules/**'],
        i18n: 'develop/languages/'
    },
    dest: {
        i18npo: 'develop/languages/',
        i18nmo: 'languages/',
        images: 'images/',
        css: '',
        js: 'js/',
    },
    lintfiles: {
        scsslint: '.scss-lint.yml',
        jshint: 'jshintrc',
        jscs: '.jscsrc',
        phpcs: 'phpcs.xml',
        phpmd: 'phpmd.xml',
        eslint: '.eslintrc',
        stylelint: '.stylelintrc'
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
        js: 'JavaScript task complete.',
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
    server: {
        url: 'library.dev'
    },
    css: {
        outputStyle: 'compressed',
        basefontsize: 16
    }
};
