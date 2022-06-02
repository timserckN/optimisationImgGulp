import gulp from 'gulp';
import image from 'gulp-image';

gulp.task('image', function() {
    return gulp.src('./fixtures/*')
        .pipe(image({
            pngquant: true,
            optipng: true,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', gulp.series('image'));