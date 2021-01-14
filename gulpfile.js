const gulp = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug');

const tsProject = ts.createProject('packages/api/tsconfig.json');
const tsResult = tsProject.src()
  .pipe(tsProject());

gulp.task('ts-compile', function () {
  return tsResult.js
    .pipe(gulp.dest('packages/api/lib'))
    .pipe(debug());
});

gulp.task('ts-types', function () {
    return tsResult.dts
      .pipe(gulp.dest('packages/api/lib'))
      .pipe(debug());
  }
);

gulp.task('ts-data-types', function () {
  return gulp.src('packages/api/src/*.d.ts')
    .pipe(gulp.dest('packages/api/lib'))
    .pipe(debug());
});

gulp.task('default', gulp.parallel('ts-compile', 'ts-types', 'ts-data-types'));
