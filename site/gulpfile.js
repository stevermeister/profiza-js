(function() {
  'use strict';

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    newer = require('gulp-newer'),

    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    notifier = require("node-notifier"),
    gutil = require('gulp-util'),
    cssnano = require('gulp-cssnano'),
    debug = require('gulp-debug'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    fs = require('fs');

  var Paths = {
    build: 'assets',
    src: 'src',
    styles: 'styles',
    buildImages: 'images',
    srcImages: 'images',
    srcJS: 'js',
    fonts: 'fonts',
    scss: 'scss',
    buildJS: 'js',
    buildCss: 'css',
    production: 'production',
    favicons: 'favicons'
  }


  /**
   * Build styles for application from SASS
   */
  gulp.task('buildSass', function() {
    gulp.src(`./${Paths.src}/${Paths.styles}/${Paths.scss}/style.scss`)
      .pipe(sass().on('error', function(err) {
        showError.apply(this, ['Sass compile error', err]);
      }))
      .pipe(autoprefixer('last 3 versions'))
      .pipe(gcmq())
      .pipe(cssnano({ safe: true }))
      .pipe(gulp.dest(`./${Paths.src}/${Paths.build}/${Paths.buildCss}`))
  });


  /**
   * Build styles for vendor from SASS
   */
  gulp.task('buildStylesVendors', function() {
    gulp.src(`./${Paths.src}/${Paths.styles}/vendor_entries/vendor.scss`)
      .pipe(sass().on('error', function(err) {
        showError.apply(this, ['Sass compile error (vendor)', err]);
      }))
      .pipe(cssnano({ safe: true }))
      .pipe(gulp.dest(`./${Paths.src}/${Paths.build}/${Paths.buildCss}`));
  });



  /**
   * Watch for file changes
   */
  gulp.task('watch', function() {
    watch(`./${Paths.src}/${Paths.styles}/${Paths.scss}/**/*`, function() {
      gulp.run('buildSass');
    });
    watch(`./${Paths.src}/${Paths.styles}/${Paths.srcImages}/**/*`, function() {
      gulp.run('imageMin');
    });
  });

  /**
   * Copy custom fonts to the build folder
   */
  gulp.task('copyFonts', function() {
    gulp.src([`./${Paths.src}/${Paths.styles}/${Paths.fonts}/**/*`])
      .pipe(gulp.dest(`./${Paths.src}/${Paths.build}/${Paths.fonts}/`));
  });

  /**
   * Copy favicons from source folder
   */
  gulp.task('copyFavicons', function() {
    gulp.src([`./${Paths.src}/${Paths.styles}/${Paths.favicons}/**/*`])
      .pipe(gulp.dest(`./${Paths.src}/${Paths.build}/${Paths.favicons}/`));
  });

  /**
   * Show error in console
   * @param  {String} preffix Title of the error
   * @param  {String} err     Error message
   */
  function showError(preffix, err) {
    gutil.log(gutil.colors.white.bgRed(' ' + preffix + ' '), gutil.colors.white.bgBlue(' ' + err.message + ' '));
    notifier.notify({ title: preffix, message: err.message });
    this.emit("end");
  }
  // Default Gulp Task
  gulp.task('default', ['buildSass', 'buildStylesVendors', 'copyFonts', 'copyFavicons', 'watch']);

}());
