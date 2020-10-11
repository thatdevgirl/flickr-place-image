const gulp = require('gulp'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      concat = require('gulp-concat'),
      source = require('vinyl-source-stream'),
      streamify = require('gulp-streamify'),
      uglify = require('gulp-uglify'),
      watch = require('gulp-watch');

// JS build task.
gulp.task('js', () => {
	browserify({
    	entries: [ 'js/flickr-place-image.js' ],
    	debug: true
  	})
    .transform(babelify.configure({
      presets: ['env']
    }))
    .bundle()
    .pipe(source('flickr-place-image.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('js'));
});

// Watcher task.
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['js']);
});

// Default task.
gulp.task('default', ['watch', 'js']);
