// let gulp = require('gulp')
// let jshint = require('gulp-jshint')
// let cleanCSS = require('gulp-clean-css')
// let rename = require('gulp-rename')
// //sass compiler that gulp-sass uses
// let sass = require('gulp-sass')(require('sass'))
// let autoprefixer = require('gulp-autoprefixer')
// let sourcemaps = require('gulp-sourcemaps')
// let imagemin  = require('gulp-imagemin')

// //gulp --tasks
// //fulp task-name to run a task
// // gulp.task('gulp-jshint', function(done){
// //     gulp.src('js/*.js')
// //          .pipe(jshint())
// //          .pipe(jshint.reporter('default'))

// //     done()
// // })


// //to run the below default task 
// //gulp 
// // gulp.task('default', function(done){
// //     gulp.src('js/*.js')
// //          .pipe(jshint())
// //          .pipe(jshint.reporter('default'))

// //     done()
// // })


// //new syntex from ver 4
// //gulp task_jshint1
// // function task_jshint1(done){
// //     gulp.src('js/*.js')
// //          .pipe(jshint())
// //          .pipe(jshint.reporter('default'))

// //     done()
// // }
// // //named tasks
// // // exports.task_jshint1 = task_jshint1
// // //default task using names tasks syntex
// // exports.default = task_jshint1


// //series or paraller
// // function task_jshint(done){
// //     gulp.src('js/*.js')
// //          .pipe(jshint())
// //          .pipe(jshint.reporter('default'))

// //     done()
// // }

// // function task_jshint1(done){
// //     gulp.src('js/*.js')
// //          .pipe(jshint())
// //          .pipe(jshint.reporter('default'))

// //     done()
// // }

// //export more than one task either as series or parallel
// // exports.default= gulp.parallel([task_jshint,task_jshint1])
// // exports.default= gulp.series([task_jshint,task_jshint1])

// //gulp minify + rename css files
// // const styleSRC = './src/scss/style.css';
// // const styleDEST = './dist/css';

// // gulp.task('styles', function(done){
// //     gulp.src(styleSRC)
// //         .pipe(cleanCSS())
// //         .pipe(rename({suffix:'.min'}))
// //         .pipe(gulp.dest(styleDEST))
// //     done()
// // })

// // gulp.task('minify-css', () => {
// //     return gulp.src(styleSRC)
// //       .pipe(cleanCSS({debug: true}, (details) => {
// //         console.log(`${details.name}: ${details.stats.originalSize}`);
// //         console.log(`${details.name}: ${details.stats.minifiedSize}`);
// //       }))
// //     .pipe(gulp.dest(styleDEST));

// //     done()
// //   });


// // //sas compile + minify + rename
// // const styleSRC = './src/scss/style.scss';
// // const styleDEST = './dist/css';

// // gulp.task('styles', function(done){
// //     gulp.src(styleSRC)
// //         .pipe(sass({
// //             outputStyle:'compressed' 
// //         }))
// //         .pipe(cleanCSS())
// //         .pipe(rename({suffix:'.min'}))
// //         .pipe(gulp.dest(styleDEST));

// //     done();
// // })


// //sas compile + minify + rename + sourcemaps + autoprefixer
// // const styleSRC = './src/scss/style.scss';
// // const styleDEST = './dist/css';

// // gulp.task('styles', function(done){
// //     gulp.src(styleSRC)
// //         .pipe(sourcemaps.init())
// //         .pipe(sass({
// //             outputStyle:'compressed' 
// //         }))
// //         .pipe(autoprefixer({
// //             cascade:false
// //         }))
// //         .pipe(cleanCSS())
// //         .pipe(rename({suffix:'.min'}))
// //         .pipe(sourcemaps.write('./'))
// //         .pipe(gulp.dest(styleDEST));

// //     done();
// // })


// //imagemin
// const styleSRC = './src/images/*';
// const styleDEST = './dist/images';

// gulp.task('image', function(done){
//     gulp.src(styleSRC)
//         .pipe(imagemin())
//         .pipe(gulp.dest(styleDEST));
//     done()
// })