const gulp 			= require('gulp'),
	$ 				= require('gulp-load-plugins')(),
	pkg 			= require('./package.json'),
	banner 			= require('gulp-banner'),
	util			= require('gulp-util'),
	named 			= require('vinyl-named'),
	connect			= require('gulp-connect-php'),
	webpack 		= require('webpack-stream'),
	imageminMozjpeg = require('imagemin-mozjpeg'),
	browserSync 	= require('browser-sync'),
	preprocess 		= require('gulp-preprocess'),
	isProduction	= !!util.env.production,
	bsyncReload		= browserSync.reload;

const paths = {
	icons: 'src/icons/**/*.svg',
	js: 'src/scripts/**/*.js',
	scss: 'src/styles/**/*.scss',
	css: 'src/css/*.css',
	php: 'src/*.php',
	html: 'src/*.html',
	images: 'src/images/*',
	imagesPNG: 'src/images/*.png',
	imagesJPG: 'src/images/*.jpg',
	webpack: 'src/scripts/*.js',
	build: './build/'
};

// Default comment
const comment = '/*\n' +
	' * Theme Name: <%= pkg.name %>\n' +
	' * Author: <%= pkg.author %>\n' +
	' * Author URI: <%= pkg.homepage %>\n' +
	' * Description: <%= pkg.description %>\n' +
	' * Version: <%= pkg.version %>\n' +
	'*/\n\n';

gulp.task('styles', () => {
	return gulp.src(paths.scss)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			errLogToConsole: true,
			outputStyle: isProduction ? 'compressed' : 'nested',
			includePaths: ['src/styles', 'node_modules/']
		}).on('error', $.sass.logError))
		.pipe($.postcss([
			require('autoprefixer'),
		]))
		.pipe($.sourcemaps.write())
		.pipe(banner(comment, {
			pkg: pkg
		}))
		.pipe(gulp.dest('build/styles'))
        .pipe(bsyncReload({stream: true}));
});

gulp.task('scripts', () => {
	return gulp.src(paths.webpack)
		.pipe($.plumber())
		.pipe(named())
		.pipe(webpack({
			mode: isProduction ? 'production' : 'development',

			output: {
				filename: '[name].min.js'
			},

			resolve: {
				modules: ['src/scripts', 'node_modules']
			},

			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader?cacheDirectory'
						}
					}
				]
			},

			devtool: isProduction ? '' : 'source-map',

			optimization: {
				minimize: isProduction
			}
		}))
		.pipe(gulp.dest('build/scripts'))
        .pipe(bsyncReload({stream: true}));
});

// Connect and start a local php server using gulp-connect-php
gulp.task('connect', function () {
	connect.server({
		base: 'build',
		open: false,
		port: 8001,
		livereload: true
	}, function (){
		browserSync({
		  proxy: '127.0.0.1:8001'
		});
	  })
});

gulp.task('images-min', ['png-images', 'jpg-images'], () => {
});

gulp.task('png-images', () => {
	return gulp.src(paths.imagesPNG)
		.pipe(gulp.dest(paths.build + 'images/'));
});

gulp.task('jpg-images', () => {
	return gulp.src(paths.imagesJPG)
		.pipe($.imagemin([
			imageminMozjpeg({
				quality: 65
			})
		]))
		.pipe(gulp.dest(paths.build + 'images/'))
        .pipe(bsyncReload({stream: true}));
});

gulp.task('html', () => {
	return gulp.src(paths.html)
		.pipe(preprocess({
			context: {
				NODE_ENV: isProduction ? 'production' : 'development'
			},
			extension: 'html'
		}))
		.pipe(gulp.dest(paths.build))
        .pipe(bsyncReload({stream: true}));
});

// Default task
gulp.task('default', ['html', 'styles', 'scripts', 'images-min', 'connect', 'watch'], () => {});

// Watch task - Use to watch change in your files and execute other tasks
gulp.task('watch', ['styles', 'scripts'], () => {
	gulp.watch([paths.js], ['scripts']);
	gulp.watch([paths.scss], ['styles']);
	gulp.watch([paths.images], ['images-min']);
	gulp.watch([paths.html], ['html']);
});