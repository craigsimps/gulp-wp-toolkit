'use strict';

const sequence = require('gulp-sequence');

module.exports = {

  'browser-sync': [require('./browser-sync')],

  'build:css': [require('./build/css')],
  'build:rtl': [require('./build/rtl')],
  'build:js': [require('./build/js')],
  'build:images': [require('./build/images')],
  'build:i18n:potgen': [require('./build/i18n')],
  'build:i18n:potomo': [require('./build/potomo')],
  'build:i18n': [['build:i18n:potgen', 'build:i18n:potomo']],
  'build:styleguide': [require('./build/styleguide')],
  build: [['build:css', 'build:js', 'build:images', 'build:i18n']],

  'clean:css': [require('./clean/css')],
  'clean:js': [require('./clean/js')],
  'clean:images': [require('./clean/images')],
  'clean:i18n': [require('./clean/i18n')],
  clean: [['clean:css', 'clean:js', 'clean:images', 'clean:i18n']],

  'lint:scss': [require('./lint/stylelint-scss')],
  'lint:css': [require('./lint/stylelint-css')],
  'lint:colors': [require('./lint/colors')],
  'lint:style': [sequence('lint:scss', 'lint:css', 'lint:colors')],

  'lint:json': [require('./lint/json')],
  'lint:jsvalidate': [require('./lint/jsvalidate')],
  'lint:eslint': [require('./lint/eslint')],
  'lint:js': [sequence('lint:jsvalidate', 'lint:json', 'lint:eslint')],

  'lint:phpcs': [require('./lint/phpcs')],
  'lint:phpmd': [require('./lint/phpmd')],
  'lint:php': [sequence('lint:phpcs', 'lint:phpmd')],

  lint: [sequence('lint:style', 'lint:php', 'lint:js')],

  bump: [require('./bump')],
  watch: [require('./watch')],
  serve: [['browser-sync', 'watch']],
  default: [['build', 'serve']],

};
