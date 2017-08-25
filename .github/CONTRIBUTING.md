# Contribute To Gulp WP Toolkit

Community-made patches, bug reports and contributions are very welcome and help make Gulp WP Toolkit the best package for managing the build tasks for WordPress theme development.

When contributing please ensure you follow the guidelines below so that we can keep on top of things.

## Getting Started

- Submit a ticket for your issue, assuming one does not already exist.
- Raise it on our [Issue Tracker](https://github.com/craigsimps/gulp-wp-toolkit/issues).
- Clearly describe the issue including steps to reproduce the bug.
- Make sure you fill in the earliest version that you know has the issue as well as the version of WordPress you're using.

## Making Changes

- Fork the repository on GitHub.
- Make the changes to your forked repository.
- Add unit tests where necessary.
- Ensure you stick to the [eslint config for gulp projects](https://github.com/gulpjs/eslint-config-gulp/) and have properly documented any new functions.
- When committing, reference your issue (if present) and include a note about the fix.
- Push the changes to your fork and submit a pull request to the `master` branch of the Gulp WP Toolkit repository.

## Code Quality
A number of tasks are available to test the code quality within this repository. Available tasks are:

* `npm run lint` run all of the below checks.
* `npm run jsonlint` checks that our JSON files are valid.
* `npm run esvalidate` checks our JavaScript is valid.
* `npm run eslint` passes our JavaScript files through the ESLint JavaScript Linter.

Theme authors won't need to use these; only those improving Gulp WP Toolkit will.

## Code Documentation

Please make sure that every method is documented well and the documentation follows the standards.

At this point you're waiting on us to merge your pull request. We'll review all pull requests, and make suggestions and changes if necessary.

# Additional Resources
- [General GitHub Documentation](http://help.github.com/)
- [GitHub Pull Request documentation](http://help.github.com/send-pull-requests/)
