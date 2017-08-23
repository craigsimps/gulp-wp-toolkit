# Gulp WP Toolkit

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
* `gulp build` runs through all of the individual build tasks.
* `gulp build:css` compiles SCSS into CSS.
* `gulp build:rtl` generates an RTL stylesheet in the theme root.
* `gulp build:js` concatenates JavaScript files defined in `config.js` and outputs into our theme `/js/` directory.
* `gulp build:images` optimizes all of our images stored in `/develop/images/` to `/images/`.
* `gulp build:i18n` generates a translations file at `/develop/languages/textdomain.pot`, where textdomain is the theme package name within `package.json`.
* `gulp build:styleguide` uses our SCSS files to generate a live style guide at `/develop/styleguide/` using Cortana (some setup required).
* `gulp build:potomo` converts and `.po` files within `/develop/languages/` into `.mo` files within `/languages/`.

### Clean
Clean tasks are included so you can quickly remove any compiled assets, for example using `gulp clean:js` will delete the concatenated `.js` and `.min.js` we have built in `js/`. Tasks available are:

* `gulp clean` will run all of the below tasks.
* `gulp clean:css` will delete `.css` files from the theme root.
* `gulp clean:js` will delete `.js` and `.min.js` files from our `/js/` output directory.
* `gulp clean:images` will delete all image files from our `/images/` output directory.
* `gulp clean:i18n` will delete our generated `.pot` file within `/develop/languages/`, and the generated `.mo` files within `/languages/`

### Lint
* `gulp lint` runs all of the following lint tasks and outputs to console.
    * `gulp lint:php` runs the following tasks:
        * `gulp lint:phpcs` runs all of our code through the PHP Codesniffer.
        * `gulp lint:phpmd` runs all of our code through the PHP Mess Detector.
    * `gulp lint:style` runs the following tasks:
        * `gulp lint:scss` uses `stylelint` to check SCSS files against the WPCS.
        * `gulp lint:css` uses `stylelint` to check CSS files against the WPCS.
        * `gulp lint:colors` checks colour usage within SCSS files using `gulp-colorguard`.
    * `gulp lint:js` runs our JS files through a number of JS linters.
        * `gulp lint:json` checks that any JSON files (for ACF, etc) are valid.
        * `gulp lint:jsvalidate` runs JSValidate on project JS files..
        * `gulp lint:eslint` runs ESLint on project JS files.
    * `gulp lint:i18n` runs through all PHP files to check we're using the correct textdomain.

### Bump
Easily bump the version number of your `package.json` and `composer.json` files (defined in config) which will in turn bump the version of your theme. Uses [Semver](http://semver.org/).

* `gulp bump` updates the patch version. 1.0.0 to 1.0.1
* `gulp bump --patch` updates the patch version. 1.0.0 to 1.0.1
* `gulp bump --minor` updates the minor version. 1.0.0 to 1.1.0
* `gulp bump --major` updates the major version. 1.0.0 to 2.0.0

### Serve
Running `gulp serve` will launch a new BrowserSync session, proxying the localhost URL which is defined in `config.js`. Our `gulp watch` task will also run, and your browser will live reload when any changes are detected. BrowserSync can also run independently of `gulp watch` by running `gulp browser-sync`.

### Watch
The default `gulp watch` task is available and watches our theme (PHP, SCSS, JS, images) for any file changes. On change, the associated `build` task will be run. 

## Default Theme Structure

The default configuration has all of the source files in a `develop` directory, in their respective `scss`, `js`, `images`, and `languages` subdirectories. For new themes, it is recommended to follow this structure, but these paths can be overridden in the config if you prefer or need to work with a different structure.

## SASS Bulk Import

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

You can override any of the lint files contained within this repository by adding a file of the same name in your theme directory. For example, if your theme directory contains a `.eslintrc` file, then it will be automatically used instead of the file included within `gulp-wp-toolkit`.

## Contributing

### Code Quality
A number of tasks are available to test the code quality within this repository. Available tasks are:

* `npm run lint` run all of the below checks.
* `npm run jsonlint` checks that our JSON files are valid.
* `npm run esvalidate` checks our JavaScript is valid.
* `npm run eslint` passes our JavaScript files through the ESLint JavaScript Linter.

Theme authors won't need to use these; only those improving Gulp WP Toolkit will.
