# Change Log for Gulp WP Toolkit
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2017-05-25
### Added
- `self:js` task alias.
- `self:eslint` task.
- Example of how not to run `lint:phpmd`.
- Custom tasks to example `Gulpfile.js`.
- Support for `php*.xml.dist` lint files.

### Changed
- Switched from `npm` to `yarn` for package management, and locked down dependency versions.
- Switched from using `gulp-banner` to `postcss-banner`.
- Increased `maxBuffer` for `lint:scss`.
- Updated documentation.
- License from GPL-3.0 to MIT.
- Ignore inconsistently-named core WP widget classes in `.scss-lint.yml`.

### Fixed
- Issue with destFile in the `build:i18n` task.

### Removed
- Guppy `pre-commit` dependency.

## [1.0.10] - 2017-01-25
### Added
- Allow JS files to be copied without merge, or grouped and concatenated.

### Changed
- Improve how style file headers are generated.

## [1.0.9] - 2017-01-18

## [1.0.8] - 2016-11-17

## [1.0.7] - 2016-11-16

## [1.0.6] - 2016-11-16

## [1.0.5] - 2016-11-16

## [1.0.4] - 2016-11-16

## [1.0.3] - 2016-11-16

## [1.0.1] - 2016-11-15

## 1.0.0 - 2016-11-15
- Initial release.

[1.1.0]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.10...1.1.0
[1.0.10]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.9...1.0.10
[1.0.9]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.8...1.0.9
[1.0.8]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.7...1.0.8
[1.0.7]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.1...1.0.3
[1.0.1]: https://github.com/craigsimps/gulp-wp-toolkit/compare/1.0.0...1.0.1
