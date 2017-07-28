'use strict';

var bower = require('gulp-bower'),
    fs = require('fs');

module.exports = function () {

    if (false === fs.existsSync('../../bower.json')) {
        return;
    }

    return bower();
};
