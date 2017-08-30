var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var spawn = require('child_process').spawn, node;


// handle all of the css concantenating
gulp.task('minify-css', function() {
	return gulp.src('assets/css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('./dist/css'));
});

// handle all of the javascript linting, concatenating, uglifying
gulp.task('js', function() {
	return gulp.src('assets/**/*.js')
		.pipe(jshint())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
	if (node) node.kill();
	node = spawn('node', ['server.js'], {stdio: 'inherit'});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
});

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('start', function() {
	gulp.run('server');

	// watch for node changes
	gulp.watch(['./server.js', './controllers/*.js', './routes/*.js'], function() {
		gulp.run('server');
	});

	// Need to watch for sass changes too? Just add another watch call!
	// no more messing around with grunt-concurrent or the like. Gulp is
	// async by default.
});

// clean up if an error goes unhandled.
process.on('exit', function() {
	if (node) node.kill();
});

gulp.task('default', ['minify-css', 'js', 'start']);