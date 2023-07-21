const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const webp = require('gulp-webp');
const filter = require('gulp-filter');

gulp.task('resize', function () {
  // Filters out .webp files and images with width of 740px
  const resizeFilter = filter(file => !file.basename.includes('.webp') && file.width !== 740, { restore: true });

  return gulp.src('_img/**/*.{jpg,png}')
    .pipe(resizeFilter)
    .pipe(imageResize(function (file) {
      if (file.basename.includes('main')) {
        return [
          {
            width: 1200,
            height: 800,
            crop: true,
            upscale: false,
            rename: { suffix: '_mobile' }
          },
          {
            width: 800,
            height: 600,
            crop: true,
            upscale: false
          }
        ];
      } else {
        return {
          width: 800,
          height: 600,
          crop: true,
          upscale: false
        };
      }
    }))
    .pipe(resizeFilter.restore)
    .pipe(gulp.dest('_dist'))
    .pipe(webp())
    .pipe(gulp.dest('_dist'));
});

gulp.task('images', gulp.series('resize'));

gulp.task('default', gulp.series('images'));
