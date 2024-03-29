var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

// Static Server + watching scss/html files
gulp.task('serve', function () {

    browserSync.init({
        server: "./app"
    });
    
    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/styles/dest"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('serve', 'sass'));
