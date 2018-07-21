'use strict';

module.exports = {
  src: {
    php: ['**/*.php', '!vendor/**'],
    images: 'develop/images/**/*',
    scss: 'develop/scss/**/*.scss',
    css: ['**/*.css', '!node_modules/**', '!develop/vendor/**'],
    js: ['develop/js/**/*.js', '!node_modules/**'],
    json: ['**/*.json', '!node_modules/**'],
    i18n: 'develop/languages/',
  },
  dest: {
    i18npo: 'develop/languages/',
    i18nmo: 'languages/',
    images: 'images/',
    css: '',
    js: 'js/',
  },
  lintfiles: {
    phpcs: 'phpcs.xml',
    phpmd: 'phpmd.xml',
    eslint: '.eslintrc',
    stylelint: '.stylelintrc',
    csscomb: '.csscomb.json',
  },
  bump: {
    files: [
      './package.json',
      './composer.json',
    ],
  },
  messages: {
    css: 'Stylesheet compiled and saved: <%= file.relative %>',
    i18n: 'Translation file generated.',
    images: 'Image files compressed and copied: <%= file.relative %>',
    js: 'JavaScript task complete: <%= file.relative %>',
    potomo: 'PO files converted to MO files.',
    styleguide: 'Styleguide task complete.',
  },
  hologram: {
    config: 'hologram_config.yml',
  },
  css: {
    basefontsize: 16,
    cssnano: {},
    remreplace: false,
    remmediaquery: true,
    scss: {
      style: {
        src: 'develop/scss/style.scss',
        dest: './',
        outputStyle: 'compressed',
        sourceMap: true,
      },
    },
  },
  js: {},
  theme: {},
};
