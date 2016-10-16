'use strict';

var config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.bowerjs + config.bower.jsfilename + '.js',
        config.dest.bowerjs + config.bower.jsfilename + '.min.js'
    ], {force: true});
};
