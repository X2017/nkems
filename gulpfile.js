var gulp = require('gulp'),
	sass = require("gulp-sass"),
	minifyCss = require("gulp-minify-css");
var browserSync = require('browser-sync').create();
//sass编译并压缩
gulp.task('scss', function() {
	gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('css'));
});
//自动刷新
gulp.task('serve', ['scss'], function() {
	browserSync.init({
		server: "./"
	});
	gulp.watch("scss/*.scss", ['scss']);
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("css/*.css").on('change', browserSync.reload);
	gulp.watch("js/*.js").on('change', browserSync.reload);
	gulp.watch("json/*.json").on('change', browserSync.reload);
	gulp.watch("json/*.txt").on('change', browserSync.reload);
	gulp.watch("html/*.html").on('change', browserSync.reload);
});