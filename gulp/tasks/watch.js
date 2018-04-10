var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });

  watch(['./docs/index.html', './docs/assets/styles/**/*.css', './docs/assets/scripts/**/*.js'], function(){
    browserSync.reload();
  });

});
