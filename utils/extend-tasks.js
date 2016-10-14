'use strict';

var defaultTasks = require('../tasks');

module.exports = function extendTasks(gulp, tasks) {
    var tasks = Object.assign({}, defaultTasks, tasks);

    Object.keys(tasks).forEach(function(taskName) {
        var args = [taskName].concat(tasks[taskName]);
        gulp.task.apply(gulp, args);
    });
};
