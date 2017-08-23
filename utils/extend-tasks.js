'use strict';

const defaultTasks = require('../tasks');

module.exports = function extendTasks(gulp, tasks) {
    tasks = Object.assign({}, defaultTasks, tasks);

    Object.keys(tasks).forEach(function(taskName) {
        const args = [taskName].concat(tasks[taskName]);
        gulp.task.apply(gulp, args);
    });
};
