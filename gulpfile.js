var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var tape = require('gulp-tape');
var colorizer = require('tap-colorize');
var merge = require('merge-stream');


var bundles = {
  main: './src/',
  test: './test/'
};


function build(id) {
  browserify({ path: bundles[id] + id + '.es6', debug: true })
    .transform( babelify({ presets: ["es2015"], extensions: [".es6"] }))
    .bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source( id + '.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
}


gulp.task('build', function() { build('main'); });
gulp.task('build-test', function() { build('test'); });
gulp.task('test', function() {
  merge(gulp.src('./build/main.js'), gulp.src('./build/test.js'))
    .pipe(tape({reporter: colorizer }));
});
gulp.task('watch', ['build', 'build-test'], function() { 
   gulp.watch(bundles.main + '**/*.es6', ['build']);
   gulp.watch(bundles.test + '**/*.es6', ['build-test']);
});
