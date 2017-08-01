var gulp    = require('gulp');

var cleanCSS = require('gulp-clean-css');

var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');



gulp.task('minify-css', function() {
	return gulp.src('assets/css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('./dist/css'));
});


gulp.task('js', function() {
	return gulp.src('assets/**/*.js')
		.pipe(jshint())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['minify-css', 'js']);