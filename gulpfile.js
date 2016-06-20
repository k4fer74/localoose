var gulp    = require('gulp')
  , webpack = require('webpack-stream')
  , uglify  = require('gulp-uglify')
  , rename  = require('gulp-rename');

gulp.task('webpack', function() {
    return gulp.src('./src/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/localoose.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js'], ['webpack']);
});
