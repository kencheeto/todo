import jshint from 'gulp-jshint';
import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('watch', () => {
  gulp.watch([
    './src/**/*',
    './gulpfile.babel.js'
  ], ['jshint', 'js', 'css']);
});

gulp.task('jshint', () => {
  return gulp.src(['./src/**/*.js', './gulpfile.babel.js'])
    .pipe(jshint({ esnext: true }))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);
