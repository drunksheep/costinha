// npm uninstall `ls -1 node_modules | tr '/\n' ' '`

var gulp = require('gulp'), 
stylus = require('gulp-stylus'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'), 
imgmin = require('gulp-imagemin'),
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'), 
packer = require('css-mqpacker'),
prefixes = require('autoprefixer'),
cssnano = require('cssnano');

gulp.task('stylus', function() {
	return gulp.src('src/stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('src'));
});

gulp.task('css', function() {
	var processors = [
	prefixes({browsers: ['last 3 versions']}),
	packer(),
	cssnano(),
	];
	return gulp.src('src/*.css')
	.pipe(sourcemaps.init())
	.pipe(postcss(processors))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'));
});

gulp.task('compress', function(){
	gulp.src(['src/js/*.js'])
	.pipe(concat( 'app.js' ))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
	gulp.src('images')
	.pipe(imagemin())
	.pipe(gulp.dest('images'))
});


gulp.task('default', ['stylus', 'css', 'compress', 'watch']);

gulp.task('watch', function() {
	gulp.watch('src/stylus/**/*.styl', ['stylus', 'css']);
	gulp.watch('src/js/**/*.js', ['compress']); 
});