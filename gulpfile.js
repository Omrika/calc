var gulp = require('gulp');

// requires the gulp-sass plugin
var sass = require('gulp-sass');

// gulp.task('hello', function(){
//     console.log('Hello Omrika');
// });

gulp.task('sass', function() {
    return gulp.src('source-files')
        .pipe(sass()) //using gulp-sass
        .pipe(gulp.dest('destination'))
});