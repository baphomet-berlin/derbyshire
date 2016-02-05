var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

function compile(entry, watch) {
  var entry = entry || 'main';
  var bundler = watchify(
    browserify({ 
      debug: true, 
      extensions: ['.es6'], 
      entries: ['src/' + entry + '.es6'] }
    ).transform(babelify.configure({ 
      extensions: ['.es6'], 
      presets: ["es2015"] 
    }))
  );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source(entry + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile('main', true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('default', ['watch']);