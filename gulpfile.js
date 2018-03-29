// variable Declaration
var gulp = require('gulp'), // For gulp
    sass = require('gulp-sass'), // for sass
    rename = require('gulp-rename'), // File Rename
    connect = require('gulp-connect'), //Livereload pages and css
    watch = require('gulp-watch'); // For watch 

// Set base url
base_url = {
    src: 'src/',
    dist: 'dist/'
}

// welcome msg
gulp.task('welcome', function() {
    console.log('Welcome to code structure!');
});

// Livereload browser
gulp.task('connect', function() {
    connect.server({
        root: './onefeed',
        livereload: true,
        directoryListing: false,
        open: true,
        defaultFile: './index.html'
    });
});

// sass compile function
gulp.task('sass', function() {
    gulp.src(base_url.src + 'sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(base_url.dist + 'css/'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }));
        // .pipe(connect.reload());
});


// Default gulp compilation
gulp.task('default', ['sass', 'connect']);

// Watcher
gulp.task('watch', ['connect'], function() {
    gulp.watch(base_url.src + '**/*.scss', ['sass']);
    gulp.watch(base_url.src + '*.html', connect.reload());
});