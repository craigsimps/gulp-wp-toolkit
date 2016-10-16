'use strict';

var config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.css + '*.css',
        config.dest.css + '*.css.map'
    ], {force: true});
};
