var gulp = require('gulp')  
//var webserver = require('gulp-webserver')  
var browserify = require('browserify')  
var babelify = require('babelify')  
var source = require('vinyl-source-stream')  
var nib = require('nib') 

var exec = require('child_process').exec;

/*gulp.task('server', function() {  
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})*/

//inicia node como tarea de gulp
gulp.task('server', function (cb) {
  exec('node app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})



gulp.task('build', function() {  
  browserify({
    entries: './src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/javascripts'))
})

gulp.task('watch', function() {  
  gulp.watch('./src/**/*.jsx', ['build'])
})

gulp.task('default', ['server', 'watch'])  