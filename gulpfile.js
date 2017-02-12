var
    gulp = require('gulp'),
    sass = require('gulp-sass');

var scss = {
  in: 'sass/style.scss',
  out: 'css/',
  watch: 'sass/**/*',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    includePaths: ['./node_modules/normalize.css']
  }
};

gulp.task('sass', function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(gulp.dest(scss.out));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(scss.watch, ['sass']);
});

