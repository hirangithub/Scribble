var gulp = require('gulp');
var inject = require('gulp-inject');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;

var paths = {
	src: 'src/**/*',
  srcHTML: './src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcIMAGES: 'src/images/**/*.{gif,jpg,jpeg,png,svg}', 
  srcJS: ([
  './src/scripts/main.js']),
  srcASSETS: (['src/**/*.mp4', 'src/**/*.mp3', 'src/**/*.ico', 'src/**/*.pdf']),

  dist: 'dist',
  distIndex: 'dist/**/*.html',
  distCSS: 'dist/**/*.css',
  distIMAGES: 'dist/**/*.{gif,jpg,jpeg,png,svg}',
  distJS: 'dist/**/*.js',
  distASSETS: (['src/**/*.mp4', 'src/**/*.mp3', 'src/**/*.ico']),
};


/**
 * PRODUCTION
 */

gulp.task('html:dist', function () {
  return gulp.src(paths.srcHTML)
    .pipe(htmlclean())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('css:dist', function () {
  return gulp.src(paths.srcCSS)
    .pipe(concat('styles/theme.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('images:dist', function () {
  return gulp.src(paths.srcIMAGES)
    .pipe(gulp.dest('./dist/images'));
});
gulp.task('js:dist', function () {
  return gulp.src(paths.srcJS)
    .pipe(concat('scripts/script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('assets:dist', function () {
  return gulp.src(paths.srcASSETS)
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy:dist', ['html:dist', 'css:dist', 'images:dist', 'js:dist', 'assets:dist']);
gulp.task('inject:dist', ['copy:dist'], function () {
  var css = gulp.src(paths.distCSS);
  var js = gulp.src(paths.distJS);
  return gulp.src(paths.distIndex)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.dist));
});
gulp.task('build', ['inject:dist']); 

/**
 * PRODUCTION END
 */


