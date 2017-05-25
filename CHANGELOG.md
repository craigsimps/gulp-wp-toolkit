# Change Log
All notable changes to this project will be documented in this file.

## 1.0.1
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
### Fixed
- Issue with destFile in the `build:i18n` task.
### Removed
- Guppy `pre-commit` dependency.
