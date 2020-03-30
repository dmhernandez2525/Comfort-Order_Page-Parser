var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var nodemon = require('gulp-nodemon')

gulp.task('css', function () {
    var plugins = [
        autoprefixer({Browserslist: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('../client/src/components/css/**/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist'));
});
gulp.task('start', function (done) {
    nodemon({
      script: 'react-scripts start'
    , ext: 'css jsx'
    , tasks: ['css'] 
    , env: { 'NODE_ENV': 'development' }
    , ignore: ['node_modules/**', 'dist/**']
    , done: done
    })
  })