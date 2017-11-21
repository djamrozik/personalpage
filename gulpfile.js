
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var prefix     = require('gulp-autoprefixer');
var plumber    = require('gulp-plumber');
var watch      = require('gulp-watch')
var less       = require('gulp-less');

gulp.task('default', function() {
    gulp.watch('./static/styles/styles.less', ['less']);
});

/*
 * Task to convert .less stylesheet to .css
 */
gulp.task('less', function() {
    return gulp.src('./static/styles/styles.less')  // only compile the entry file
        .pipe(plumber())
        .pipe(less({
            paths: ['./', './overrides/']
        }))
        .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade: true})
        .pipe(gulp.dest('./static/styles/'))
        .pipe(livereload());
});
