'use strict';

var sequence = require('gulp-sequence');

module.exports = {

    'browser-sync': [require('./browser-sync')],

    'dep:install': [require('./dependencies/install')],
    'dep:bowercss': [require('./dependencies/bowercss')],
    'dep:bowerjs': [require('./dependencies/bowerjs')],
    'dependencies': [sequence('dep:install', ['dep:bowercss', 'dep:bowerjs'])],

    'build:css': [require('./build/css')],
    'build:rtl': [require('./build/rtl')],
    'build:js': [require('./build/js')],
    'build:images': [require('./build/images')],
    'build:i18n:potgen': [require('./build/i18n')],
    'build:i18n:potomo': [require('./build/potomo')],
    'build:i18n': [['build:i18n:potgen','build:i18n:potomo']],
    'build': [sequence('dependencies', ['build:css', 'build:js', 'build:images', 'build:i18n'])],
    'build:styleguide': [require('./build/styleguide')],

    'clean:css': [require('./clean/css')],
    'clean:js': [require('./clean/js')],
    'clean:images': [require('./clean/images')],
    'clean:i18n': [require('./clean/i18n')],
    'clean:bowercss': [require('./clean/bowercss')],
    'clean:bowerjs': [require('./clean/bowerjs')],
    'clean:bower': [['clean:bowercss', 'clean:bowerjs']],
    'clean': [['clean:css', 'clean:js', 'clean:images', 'clean:i18n', 'clean:bower']],

    'lint:css': [require('./lint/stylelint')],
    'lint:scss': [require('./lint/scss')],
    'lint:eslint': [require('./lint/eslint')],
    'lint:jshint': [require('./lint/jshint')],
    'lint:jscs': [require('./lint/jscs')],
    'lint:jsvalidate': [require('./lint/jsvalidate')],
    'lint:json': [require('./lint/json')],
    'lint:js': [sequence('lint:jshint', 'lint:jscs', 'lint:jsvalidate', 'lint:json')],
    'lint:i18n': [require('./lint/i18n')],
    'lint:colors': [require('./lint/colors')],
    'lint:phpcs': [require('./lint/phpcs')],
    'lint:phpmd': [require('./lint/phpmd')],
    'lint:php': [sequence('lint:phpcs', 'lint:phpmd')],
    'lint': [sequence('lint:php', 'lint:scss', 'lint:js', 'lint:i18n', 'lint:colors')],

    'self:eslint': [require('./self/eslint')],
    'self:jshint': [require('./self/jshint')],
    'self:jscs': [require('./self/jscs')],
    'self:jsvalidate': [require('./self/jsvalidate')],
    'self:json': [require('./self/json')],
    'self:js': [sequence('self:eslint', 'self:jshint', 'self:jscs', 'self:jsvalidate', 'self:json')],
    'self': [sequence('self:js')],

    'bump': [require('./bump')],
    'watch': [require('./watch')],
    'serve': [['browser-sync', 'watch']],
    'default': [['build', 'browser-sync', 'watch']]

};
