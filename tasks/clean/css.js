'use strict';

const config = require('../../config');
const del = require('del');

module.exports = function() {
  return del([
    config.dest.css + '*.css',
    config.dest.css + '*.css.map',
  ], { force: true });
};
