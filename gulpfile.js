/**
 * Created by plter on 8/10/16.
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourceMaps = require("gulp-sourcemaps");
const through2 = require("through2");
var allTargets = [];

global.whatProject = function (projectName, projectDirectory) {
    var srcDir = "src";
    const buildHtmlTNDebug/*(TN)Task Name*/ = `${projectName}BuildHtmlDebug`;
    const buildHtmlTNRelease = `${projectName}BuildHtmlRelease`;
    const buildTsTNRelease = `${projectName}BuildTsRelease`;
    const buildTsTNDebug = `${projectName}BuildTsDebug`;
    var debugDestDir = `build/${projectName}/Debug`;
    var releaseDestDir = `build/${projectName}/Release`;
    var debugOutputJs = `${projectName}.js`;
    var releaseOutputJs = `${projectName}.min.js`;
    var srcArray = ['src/**/*.ts', `${projectDirectory}/${srcDir}/**/*.ts`];

    gulp.task(buildHtmlTNDebug, function () {
        return gulp.src(`${projectDirectory}/${srcDir}/*.html`)
            .pipe(through2.obj(function (file, enc, cb) {
                file.contents = new Buffer(file.contents.toString().replace("${SCRIPT}", `<script src="${debugOutputJs}"></script>`));
                cb(null, file);
            }))
            .pipe(gulp.dest(debugDestDir));
    });

    gulp.task(buildHtmlTNRelease, function () {
        return gulp.src(`${projectDirectory}/${srcDir}/*.html`)
            .pipe(through2.obj(function (file, enc, cb) {
                file.contents = new Buffer(file.contents.toString().replace("${SCRIPT}", `<script src="${releaseOutputJs}"></script>`));
                cb(null, file);
            }))
            .pipe(gulp.dest(releaseDestDir));
    });

    gulp.task(buildTsTNDebug, function () {
        return gulp.src(srcArray)
            .pipe(sourceMaps.init())
            .pipe(ts({out: debugOutputJs, target: "ES5"}))
            .pipe(concat(debugOutputJs))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(debugDestDir));
    });

    gulp.task(buildTsTNRelease, function () {
        return gulp.src(srcArray)
            .pipe(ts({out: releaseOutputJs, target: "ES5"}))
            .pipe(uglify())
            .pipe(gulp.dest(releaseDestDir))
    });

    gulp.task(projectName, [buildHtmlTNDebug, buildHtmlTNRelease, buildTsTNDebug, buildTsTNRelease]);
    allTargets.push(projectName);
};

require("./examples/HelloWorld/gulpfile");

gulp.task("default", allTargets);