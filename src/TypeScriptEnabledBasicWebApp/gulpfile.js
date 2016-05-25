/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    rimraf = require('rimraf');

var paths = {
    ts: {
        src: ["ts/*.ts", "typings/main.d.ts"],
        dest: "wwwroot/app"
    }
}

gulp.task('build', function () {
    var tsProject = tsc.createProject("tsConfig.json");
    return gulp.src(paths.ts.src)
            .pipe(tsc(tsProject))
            .pipe(gulp.dest(paths.ts.dest));
});

gulp.task('watch', function () {
    return gulp.watch(paths.ts.src, ["build"]);
});

gulp.task('default', function () {
    // place code for your default task here
});