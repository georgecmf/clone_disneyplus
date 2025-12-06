const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Task para scripts
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Task para styles (scss)
function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Task para images
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// ⭐ Task para fonts (corrigida)
function fonts() {
    return gulp.src('./src/assets/fonts/**/*')
        .pipe(gulp.dest('./dist/assets/fonts'));
}

// Build final
exports.default = gulp.series(styles, images, scripts, fonts);

// Watch
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.series(styles));
    gulp.watch('./src/scripts/*.js', gulp.series(scripts));
    gulp.watch('./src/assets/fonts/*', gulp.series(fonts));
};
