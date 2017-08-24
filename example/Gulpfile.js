/* eslint-disable */
'use strict';

const gulp = require('gulp'),
	pkg = require('./package.json'),
	toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
	theme: {
		name: pkg.theme.name,
		themeuri: pkg.homepage,
		description: pkg.theme.description,
		author: pkg.author,
		authoruri: pkg.theme.authoruri,
		version: pkg.version,
		license: pkg.license,
		licenseuri: pkg.theme.licenseuri,
		tags: pkg.theme.tags,
		textdomain: pkg.name,
		domainpath: pkg.theme.domainpath,
		template: 'genesis',
		notes: pkg.theme.notes,
	},
	js: {
		'letters': [
			'develop/js/a.js',
			'develop/js/b.js',
			'develop/js/c.js',
		],
		'numbers': [
			'develop/js/1.js',
			'develop/js/2.js',
		],
		'standalone': [
			'develop/js/standalone.js',
		],
	},
	server: {
		url: 'example.dev',
	},
	src: {
		zipuser: [
			'images/*',
			'includes/**/*',
			'includes-vendors/**/*',
			'js/*',
			'languages/*',
			'front-page.php',
			'functions.php',
			'LICENSE.md',
			'page_landing.php',
			'readme.txt',
			'screenshot.png',
			'style*',
		],
		zipdev: [
			'develop/images/*',
			'develop/js/*',
			'develop/languages/*',
			'develop/scss/**/*',
			'images/*',
			'includes/**/*',
			'includes-vendors/**/*',
			'js/*',
			'languages/*',
			'CHANGELOG.md',
			'composer.json',
			'composer.lock',
			'front-page.php',
			'functions.php',
			'Gulpfile.js',
			'LICENSE.md',
			'package.json',
			'page_landing.php',
			'readme.txt',
			'README.md',
			'screenshot.png',
			'style*',
		],
	},
	css: {
		baseFontSize: 16, // Used by postcss-pxtorem.
		scss: {
			'editor-style': {
				src: 'develop/scss/editor.scss',
				dest: './',
				outputStyle: 'compressed',
			},
		},
	},
});

toolkit.extendTasks(gulp, {
	// Task Name.
	console: [
		['build'],
		function() {
			console.log('This is an extended task. It depends on `build`');
		},
	],
	'lint:php': [['lint:phpcs']], // How not to run lint:phpmd.
	'zip': [['zipuser', 'zipdev']],
	'zipuser': function() {
		return gulp.src(toolkit.config.src.zipuser, {base: './'}).
			pipe(zip(pkg.name + '-' + pkg.version + '.zip')).
			pipe(gulp.dest('dist'));
	},
	'zipdev': function() {
		return gulp.src(toolkit.config.src.zipdev, {base: './'}).
			pipe(zip(pkg.name + '-developer-' + pkg.version + '.zip')).
			pipe(gulp.dest('dist'));
	},
});
