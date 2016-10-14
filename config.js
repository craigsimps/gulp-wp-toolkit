var pkg = require('./package.json'),
    path = require('path'),
    absPathToBower = path.resolve();

var sources = {
    root: '',
    code: '**/*.php',
    images: 'develop/images/**/*',
    scripts: 'develop/js/**/*.js',
    styles: 'develop/scss/**/*.scss',
    json: '**/*.json'
};

module.exports = {
    theme: {
        name: "Genesis Starter Theme",
        homepage: pkg.homepage,
        description: pkg.description,
        author: pkg.author,
        version: pkg.version,
        licence: pkg.license,
        textdomain: pkg.name,
        template: "genesis"
    },
    hologram: {
        config: 'hologram_config.yml'
    },
    i18n: {
        src: sources.code,
        textdomain: 'genesis-starter-theme',
        dest: 'languages/',
        message: 'i18n tasks complete.',
        keywords: [
            '__:1,2d',
            '_e:1,2d',
            '_x:1,2c,3d',
            'esc_html__:1,2d',
            'esc_html_e:1,2d',
            'esc_html_x:1,2c,3d',
            'esc_attr__:1,2d',
            'esc_attr_e:1,2d',
            'esc_attr_x:1,2c,3d',
            '_ex:1,2c,3d',
            '_n:1,2,4d',
            '_nx:1,2,4c,5d',
            '_n_noop:1,2,3d',
            '_nx_noop:1,2,3c,4d'
        ]
    },
    code: {
        src: sources.code,
        ignore: [''],
        standard: 'WordPress',
        message: 'PHP lint complete.'
    },
    images: {
        src: sources.images,
        dest: 'images/',
        message: 'Images task complete.'
    },
    scripts: {
        src: sources.scripts,
        json: sources.root + '**/*.json',
        files: [
            'develop/js/main.js'
        ],
        jshint: sources.root + '.jshintrc',
        jscs: sources.root + '.jscsrc',
        output: 'theme.js',
        filename: 'theme',
        dest: 'js/',
        message: 'Javascript tasks complete.'
    },
    server: {
        url: 'library.dev'
    },
    styles: {
        src: sources.styles,
        lint: sources.root + '.scss-lint.yml',
        output: 'compressed',
        dest: '',
        message: 'Stylesheet compiled & saved.'
    },
    dependencies: {
        path: absPathToBower,
        jsoutput: sources.root + 'vendor/',
        jsfilename: 'vendor',
        cssoutput: sources.root + 'vendor/',
        cssfilename: 'vendor',
        message: 'Bower components stripped and minified.'
    },
    watch: {
        root: sources.root + '**/*',
        code: sources.code,
        images: sources.images,
        scripts: sources.scripts,
        styles: sources.styles
    },
    self: {
        src: './**/*.js',
        jscs: '.jscsrc',
        jshint: '.jshintrc',
        json: [
            'package.json',
            '.jscsrc',
            '.jshintrc'
        ]
    }
};
