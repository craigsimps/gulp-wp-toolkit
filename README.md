# Re-usable Gulp Toolkit for WordPress Themes

This is a re-usable set of theme tasks which can be pulled into any theme. 

## Usage

Add a `package.json` to your theme like so:

```
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "",
  "repository": "",
  "license": "GPL-2.0",
  "main": "Gulpfile.js",
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-wp-toolkit": "craigsimps/gulp-wp-toolkit"
  }
}
```

Create a simple `Gulpfile.js` in your theme root, like this:

```
'use strict';

var gulp = require('gulp');
var toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({ /* config overrides */ });
toolkit.extendTasks(gulp, { /* gulp task overrides */ });
```
