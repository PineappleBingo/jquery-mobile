var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: 'site'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('site/assets/scss/**/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('site/assets/css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () { //files-to-watch
    gulp.watch("site/assets/scss/**/*.scss", ['sass']);

    gulp.watch("site/**/*.html").on('change', bs.reload);
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});