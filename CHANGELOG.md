# Change Log for Gulp WP Toolkit
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
