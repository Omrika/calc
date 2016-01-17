var gulp = require('gulp');

// requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// gulp.task('hello', function(){
//     console.log('Hello Omrika');
// });

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) //using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function() { //second param is telling gulp that browserSync needs to be completed before watch is allowed to run. This is because we want live-reloading to occur.
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

