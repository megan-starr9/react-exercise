const gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
const sass = require('gulp-sass');

// setup
sass.compiler = require('node-sass');

function compileScripts() {
  return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.tsx'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/js'));
}
compileScripts.displayName = 'build:scripts';

function compileStyles() {
  return gulp.src('./src/global.scss')
      .pipe(sass({
        includePaths: ['./src/components/']
      }).on('error', sass.logError))
      .pipe(gulp.dest('public/css'));
}
compileStyles.displayName = 'build:styles';

gulp.task(compileScripts);
gulp.task(compileStyles);
