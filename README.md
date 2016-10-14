# Re-usable Gulp Toolkit for WordPress Themes

This is a re-usable set of Gulp tasks which can be pulled into any WordPress theme. 

## Usage

Add a `package.json` to your theme like so:

```
{
  "name": "craigsimpson",
  "homepage": "https://craigsimpson.scot/",
  "version": "1.0.0",
  "author": "Craig Simpson <craig@craigsimpson.scot>",
  "description": "Custom WordPress theme, based on the Genesis Framework.",
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

var gulp = require('gulp'),
    pkg = require('./package.json'),
    toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
    theme: {
        name: "WordPress Theme Name",
        homepage: pkg.homepage,
        description: pkg.description,
        author: pkg.author,
        version: pkg.version,
        licence: pkg.licence,
        textdomain: pkg.name
    }
});

toolkit.extendTasks(gulp, { /* gulp task overrides */ });
```
