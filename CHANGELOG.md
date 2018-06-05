# Change Log for Gulp WP Toolkit
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.3.2] -2018-06-05
### Changed

* Updated changelog.

## [2.3.1] -2018-06-05
### Changed

* Pass config object directly to BrowserSync task. See #102
* Pass config object to CSSNano in CSS build task. See #104
* Update bundled CSSComb file.

### Fixed

* `gulp bump` now respects arguments passed. See #87

### Removed

* Hologram style guide task.

## [2.2.1] - 2018-05-07
### Removed
* `yarn.lock` file.

## [2.2.0] - 2018-05-07
### Added
* Support for CSSComb on stylesheets with expanded output style.

### Changed
* Allow source map creation to be optional.

## [2.1.0] - 2017-12-27
### Changed
* Moved the configuration of the PostCSS `pxtorem` package into global config.

## [2.0.0] - 2017-09-04
### Added
* Support for multiple .css files to be compiled.
* Minimum node engine version set to 6.0.0. Props [GaryJones](https://github.com/GaryJones/)
* Clarification of package name in README.md. Props [GaryJones](https://github.com/GaryJones/)
* Support for notes within `style.css` stylesheet header. Props [GaryJones](https://github.com/GaryJones/)
* Self-linting tasks now available as NPM scripts. Props [GaryJones](https://github.com/GaryJones/)
* `.editorconfig` file to make sure all contributors have the same preconfigured editor rules. Props [GaryJones](https://github.com/GaryJones/)
* GitHub documents with templates for issue reporting, contributions and pull requests. Props [GaryJones](https://github.com/GaryJones/)
* Typical theme structure example to documentation. Props [GaryJones](https://github.com/GaryJones/)
* Support for `develop/images/screenshot.png` to be optimized and moved to theme root.
* Improve stylesheet, image and JavaScript notifications to include filename.

### Changed
* Use `const` and `let` instead of `var`. Props [GaryJones](https://github.com/GaryJones/)
* Refreshed JS lint tasks, removing JSCS & JSHint and switching to ESLint and Stylelint. Props [GaryJones](https://github.com/GaryJones/)
* Refreshed CSS/ SCSS lint tasks to use Stylelint for both, with separate rulesets. Props [GaryJones](https://github.com/GaryJones/) and [ntwb](https://github.com/ntwb)
* Dependencies updated to most recent versions. Props [GaryJones](https://github.com/GaryJones/)
* Split `build:i18n` into subtasks which run `potgen` and `potomo`. Props [GaryJones](https://github.com/GaryJones/)
* Lack of `bower.json` file will no longer result in build failure.
* Moved base font size used in `gulp-pxtorem` into the `config.js` file.
* Colorguard task now runs on the compiled `.css` file.
* Browser Sync now only triggered when a `server` variable is found in config. Props [GaryJones](https://github.com/GaryJones/)
* Improvements to the documentation of tasks, including reordering sections and clarifying descriptions. Props [GaryJones](https://github.com/GaryJones/)
* Default task simplified to run `build` and `serve`.

### Removed
* Support for `node-bourbon` and `node-neat`. Props [GaryJones](https://github.com/GaryJones/)
* Support for Bower. Props [GaryJones](https://github.com/GaryJones/)
* Gulp-based self-linting tasks. Props [GaryJones](https://github.com/GaryJones/)
* lint:i18n (checktextdomain) task in favour of PHPCS WPCS check. Props [GaryJones](https://github.com/GaryJones/)

## [1.2.2] - 2017-06-30
### Added
- Support for bulk import of Sass files, using `gulp-sass-bulk-import`.
- Documentation for Sass bulk import in Readme file.
- Missing comparison link to changelog.
- `gulp-plumber` to JS and i18n build tasks.

### Fixed
- Spelling of License in project files.
- Typo in Gulpfile.js example within Readme file.

## [1.2.1] - 2017-05-29
### Fixed
- Fix watch source for `build:css`.

## [1.2.0] - 2017-05-25
### Added
- `lint:css` task, which uses Stylelint & WPCS ruleset.

## [1.1.0] - 2017-05-25
### Added
- `self:js` task alias.
- `self:eslint` task.
- Example of how not to run `lint:phpmd`.
- Custom tasks to example `Gulpfile.js`.
- Support for `php*.xml.dist` lint files.

### Changed
- Switch from `npm` to `yarn` for package management, and lock down dependency versions.
- Switch from using `gulp-banner` to `postcss-banner`.
- Increase `maxBuffer` for `lint:scss`.
- Update documentation.
- Switch license from GPL-3.0 to MIT.
- Ignore inconsistently-named core WP widget classes in `.scss-lint.yml`.

### Fixed
- Issue with destFile in the `build:i18n` task.

### Removed
- `guppy-pre-commit` dependency.

## [1.0.10] - 2017-01-25
### Added
- Allow JS files to be copied without merge, or grouped and concatenated.

### Changed
- Improve how style file headers are generated.

## [1.0.9] - 2017-01-18
### Changed
- Example should show `bowerjs` directory as changed.
- Explicitly include Node Bourbon.
- Separate `.po` and `.mo` files.

### Fixed
- Correct spelling of license.
- Allow SCSS to support expanded outputStyle.

### Removed
- Remove pre-commit task.

## [1.0.8] - 2016-11-17
### Added
- Implement ESLint using `eslint-config-wordpress`.

## [1.0.7] - 2016-11-16
### Changed
- Remove unused variables.
- Update dependencies, apart from `gulp-sequence`.

### Fixed
- Fix `self:jscs` task to run jscs, not jshint.

## [1.0.6] - 2016-11-16
### Changed
- Include `use strict` statement for `rtl.js`.
- Use single quotes around strings in example file.

### Fixed
- Exclude `composer` files from PHP sources.
- Prevent linting of `node_modules` by `gulp lint:js` tasks.
- Prevent linting of `node_modules` when using `gulp self`.

## [1.0.5] - 2016-11-16
### Fixed
- Remove incomplete code in `gulp lint:i18n` task.

## [1.0.4] - 2016-11-16
### Changed
- Remove `npm-shrinkwrap.json`.

## [1.0.3] - 2016-11-16
### Changed
- Update dependencies.
- Improve documentation.

## [1.0.2] - 2016-11-15
### Changed
- Update `example/package.json` as package is now available on npmjs.com.

## [1.0.1] - 2016-11-15
### Changed
- Update dependencies.

## 1.0.0 - 2016-11-15
### Added
- Initial release.

[2.3.2]: https://github.com/craigsimps/gulp-wp-toolkit/compare/2.3.1...2.3.2
[2.3.1]: https://github.com/craigsimps/gulp-wp-toolkit/compare/2.2.1...2.3.1
[2.2.1]: https://github.com/craigsimps/gulp-wp-toolkit/compare/2.2.0...2.2.1
[2.2.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.2.2...2.0.0
[1.2.2]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.10...1.1.0
[1.0.10]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.9...1.0.10
[1.0.9]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.8...1.0.9
[1.0.8]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.7...1.0.8
[1.0.7]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.0...1.0.1
