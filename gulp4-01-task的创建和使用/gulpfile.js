const gulp = require('gulp')

// gulp 后不跟任何任务名称时，会执行 default
// 也可以直接 gulp default
gulp.task('default', function(callback) {
  console.log('gulp is running ...');
  callback();
});


// 将任务函数单独拿出去
function t1(callback) {
  console.log('task1 ....');
  callback();
}

gulp.task('task1', t1);

// 直接将任务函数传给 gulp.task，此时默认以函数名作为任务名
function task2(callback) {
  console.log('task2 ...');
  callback();
}

gulp.task(task2);

// 修改任务函数的 displayName 属性，可以改变注册的任务名
function t3(callback) {
  console.log('task3 ...');
  callback();
}

t3.displayName = 'task3'
gulp.task(t3);

// 串行执行
// gulp.series(t1, t2, t3) 多个任务按顺序串行执行
/// 可以传任务名，也可以传任务函数
gulp.task('all', gulp.series('task1', 'task2', 'task3'))

// 并行执行 gulp.parallel
gulp.task('async-all', gulp.parallel('task1', 'task2', 'task3'))
