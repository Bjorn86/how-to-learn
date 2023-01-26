// Gulp
const gulp = require('gulp');
// Локальный сервер BrowserSync
const browserSync = require('browser-sync');
// Компилятор препроцессоров Sass Scss
const sass = require('gulp-sass')(require('sass'));
// Плагин котрый убирает из CSS ненужные строки
const replace = require( 'gulp-replace' );

gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
  return gulp.src("./scss/**/*.+(scss|sass)")
          .pipe(sass().on('error', sass.logError))
          .pipe(replace( /^[ \t]*\@charset[ \t]+\"UTF\-8\"[ \t]*;/gmi, '' ))
          .pipe(gulp.dest("./blocks/"))
          .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch("./scss/**/*.+(scss|sass|css)", gulp.parallel("styles"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
