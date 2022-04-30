const gulp = require('gulp');

function copy1(cb) {
  return gulp.src('src/assets/**/*.*') // node 一个流，pipe
  .pipe(gulp.dest('dist/assets/')); // gulp.dest：把所有文件保存到指定位置
}

function copy(cb) {
  return gulp.src([
    'src/assets/**/*.*',
    'src/lib/**/*.*',
  ], {
    base: 'src/' // 按照 src 目录的结构来处理输出的结构，如果不设置可能会把很多东西都堆在一起
  })
  .pipe(gulp.dest('dist/assets/'));
}

gulp.task(copy)

