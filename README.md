# Gulp WP Toolkit

[![Greenkeeper badge](https://badges.greenkeeper.io/craigsimps/gulp-wp-toolkit.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/craigsimps/gulp-wp-toolkit.svg?branch=master)](https://travis-ci.org/craigsimps/gulp-wp-toolkit)

Re-usable Gulp Toolkit for WordPress Themes.

This is a Gulp package which holds all of the tasks, configuration and lint files I use when building WordPress themes.  Rather than holding all of these tasks in one giant `Gulpfile.js` within each theme I build, this is a standalone package and can be pulled in independently.

## Installation

Using the package is simple - within your custom theme create a `package.json` which has `gulp` and `gulp-wp-toolkit` as dependencies.

Make sure to update the other parts of your `package.json` too, as these will be pulled in to form the theme stylesheet header

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
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-wp-toolkit": "^1.0.1"
  }
}
```

Then create a simple `Gulpfile.js` in your theme root, like this:

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
        license: pkg.license,
        textdomain: pkg.name
    },
    js: {
        'theme' : [
             'develop/vendor/a.js',
             'develop/js/b.js'
         ],
         'something-conditional' : [
             'develop/js/standalone.js'
         ]
    }
});

toolkit.extendTasks(gulp, { /* Task Overrides */ });
```

Once your `Gulpfile.js` is in place, install all the dependencies using `yarn install`. If you're not already using Yarn, please see the [installation instructions](https://yarnpkg.com/lang/en/docs/install/).

See the files in the example directory for more advanced configuration.

## Tasks

Once installed, the following tasks will be available to run via `gulp <taskname>`.

### Build
* `gulp build` runs the following tasks:
    * `gulp build:css` compiles SCSS into CSS.
    * `gulp build:js` concatenates JavaScript files defined in `config.js` and outputs into the theme `/js/` directory.
    * `gulp build:images` optimizes all of the images stored in `/develop/images/` to `/images/`.
    * `gulp build:i18n` runs the following tasks:
        * `gulp build:i18npotgen` generates a translations file at `/develop/languages/textdomain.pot`, where textdomain is the theme package name within `package.json`.
        * `gulp build:potomo` converts and `.po` files within `/develop/languages/` into `.mo` files within `/languages/`.
* `gulp build:styleguide` (experimental) uses the SCSS files to generate a live style guide at `/develop/styleguide/` using Cortana (some setup required).
* `gulp build:rtl` (experimental) generates an RTL stylesheet in the theme root.

### Clean
Clean tasks are included so you can quickly remove any compiled assets, for example using `gulp clean:js` will delete the concatenated `.js` and `.min.js` we have built in `js/`. Tasks available are:

* `gulp clean` runs the following tasks:
    * `gulp clean:css` will delete `.css` and `.css.map` files from the theme root.
    * `gulp clean:js` will delete `.js` and `.min.js` files from the `/js/` output directory.
    * `gulp clean:images` will delete all image files from the `/images/` output directory.
    * `gulp clean:i18n` will delete the generated `.pot` file within `/develop/languages/`, and the generated `.mo` files within `/languages/`

### Lint
* `gulp lint` runs the following tasks:
    * `gulp lint:php` runs the following tasks:
        * `gulp lint:phpcs` check the code with PHP_CodeSniffer against the WordPress Coding Standards.
        * `gulp lint:phpmd` check the code with PHP Mess Detector.        
    * `gulp lint:style` runs the following tasks:
        * `gulp lint:scss` uses `stylelint` to check SCSS files against the WordPress Coding Standards.
        * `gulp lint:css` uses `stylelint` to check CSS files against the WordPress Coding Standards.
        * `gulp lint:colors` checks colour usage within SCSS files using `gulp-colorguard`.
    * `gulp lint:js` runs the following tasks:
        * `gulp lint:json` checks that any JSON files (for ACF, etc) are valid.
        * `gulp lint:jsvalidate` runs JSValidate on project JS files..
        * `gulp lint:eslint` runs ESLint on project JS files.

### Watch
The default `gulp watch` task is available and watches the theme (PHP, SCSS, JS, images) for any file changes. On change, the associated `build` task will be run.
 
### Serve
Running `gulp serve` will launch a new BrowserSync session, proxying the localhost URL which is defined in your theme's config under `server` -> `url` key. If the key is not defined, then BrowserSync won't start.

Our `gulp watch` task will also run, and your browser will live reload when any changes are detected.

BrowserSync can also run independently of `gulp watch` by running `gulp browser-sync`.

### Default

The default task (`gulp`) will run `gulp build` and `gulp serve`. 

### Bump
Easily bump the version number of your `package.json` and `composer.json` files (defined in config) which will in turn bump the version of your theme. Uses [Semver](http://semver.org/).

* `gulp bump` updates the patch version. 1.0.0 to 1.0.1
* `gulp bump --patch` updates the patch version. 1.0.0 to 1.0.1
* `gulp bump --minor` updates the minor version. 1.0.0 to 1.1.0
* `gulp bump --major` updates the major version. 1.0.0 to 2.0.0


## Default Theme Structure

The default configuration has all of the source files in a `develop` directory, in their respective `scss`, `js`, `images`, and `languages` subdirectories. For new themes, it is recommended to follow this structure, but these paths can be overridden in the config if you prefer or need to work with a different structure.

A typical theme structure may look like:

```
.
├── develop/
│   ├── images/ (original images)
│   ├── js/ (JavaScript module files)
│   ├── languages/
│       ├── theme-name.pot (generated by Gulp WP Toolkit)
│       └── en_GB.po
│   └── scss/
│       ├── base/ (structure your SCSS how you want)
│       ├── variables/ (structure your SCSS how you want)
│       └── style.scss (reference your SCSS structure here)
├── images/ (generated by Gulp WP Toolkit)
├── js/ (generated by Gulp WP Toolkit)
├── languages/ (generated by Gulp WP Toolkit)
├── node_modules/ (generated by npm / yarn)
├── src/ (PHP classes)
├── templates/ (WP template files)
├── tests/
│   ├── Integration/
│   └── Unit/
├── vendor/ (generated by Composer)
└── views/ 

```

## Sass Bulk Import

Use of `gulp-sass-bulk-import` means that whole folders of Sass partials can be easily included with `@import 'foldername/*';`. Using this method, files are loaded in alphabetical order.

If files are required to be loaded in a specific order, you can declare these immediately before the wildcard import with the normal Sass syntax `@import 'folder/file'`.

## Bower

This toolkit no longer supports Bower. Better is to add your Bower dependencies into your themes' `package.json`, and then reference the correct file (from inside your `node_modules/`) in your `style.scss`, or the the `js` config as needed.

## Overrides

### Updating Config

All of the [existing configuration](config.js) can be easily overwritten by passing your new config object into the `toolkit.extendConfig()` function. An [example from a recent project](example/Gulpfile.js) shows how easy it is to update the array of JS files to be concatenated, and change the localhost URL to point to your project, for instance.

### Adding Tasks

Additional tasks can be added by passing an object to the `toolkit.extendTasks()` function, where the key is the name of the task. [Example](example/Gulpfile.js).

### Custom Lint Files

You can override any of the lint files contained within this repository by adding a file of the same name in your theme directory. For example, if your theme directory contains a `.eslintrc` file or `phpcs.xml.dist`, then it will be automatically used instead of the file included within `gulp-wp-toolkit`.

## Contributing to Gulp WP Toolkit

Please see [CONTRIBUTING](.github/CONTRIBUTING.md).
