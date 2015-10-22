
//grap our gulp packages
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var nodemon    = require('gulp-nodemon');
var prefix     = require('gulp-autoprefixer');
var plumber    = require('gulp-plumber');
var watch      = require('gulp-watch');
var less       = require('gulp-less');

gulp.task('default', function() {

	// listen for changes
	livereload.listen();

	// configure nodemon
	nodemon({
		script: 'index.js', // the script to run the app
		ext: 'js'
	}).on('restart', function(){
		gulp.src('index.js'); // when the app has restarted, run livereload?
			//.pipe(livereload());
	});

	//compile less
	gulp.watch('./client/styles/styles.less', ['less']);
	
	//watch front-end
	gulp.watch('client/app/**/*', function(event){
		gulp.src('client/app/**/*')
	        .pipe(livereload());
	});
	
});

gulp.task('less', function() {
    return gulp.src('./client/styles/styles.less')  // only compile the entry file
        .pipe(plumber())
        .pipe(less({
          paths: ['./', './overrides/']
        }))
        .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
        .pipe(gulp.dest('./client/content/'))
        .pipe(livereload());
});