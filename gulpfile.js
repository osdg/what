/**
 * Created by plter on 8/10/16.
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourceMaps = require("gulp-sourcemaps");
const through2 = require("through2");
global.libSrcFiles = [];

/**
 *
 * @param {Array} dest
 * @param {Array} array
 */
global.addToArray = function (dest, array) {
    array.forEach(function (item) {
        dest.push(item);
    })
};

require("./src/gulpfile");

var allTargets = [];

/**
 *
 * @param {String} projectName
 * @param {Array} projectSrcFiles
 * @param {String} projectDir
 */
global.whatProject = function (projectName, projectSrcFiles, projectDir) {
    var srcDir = "src";
    const buildHtmlTNDebug/*(TN)Task Name*/ = `${projectName}BuildHtmlDebug`;
    const buildHtmlTNRelease = `${projectName}BuildHtmlRelease`;
    const buildTsTNRelease = `${projectName}BuildTsRelease`;
    const buildTsTNDebug = `${projectName}BuildTsDebug`;
    var debugDestDir = `build/${projectName}/Debug`;
    var releaseDestDir = `build/${projectName}/Release`;
    var debugOutputJs = `${projectName}.js`;
    var releaseOutputJs = `${projectName}.min.js`;
    var srcArray = [];
    addToArray(srcArray, libSrcFiles);
    addToArray(srcArray, projectSrcFiles);

    gulp.task(buildHtmlTNDebug, function () {
        return gulp.src(`${projectDir}/${srcDir}/*.html`)
            .pipe(through2.obj(function (file, enc, cb) {
                file.contents = new Buffer(file.contents.toString().replace("${SCRIPT}", `<script src="${debugOutputJs}"></script>`));
                cb(null, file);
            }))
            .pipe(gulp.dest(debugDestDir));
    });

    gulp.task(buildHtmlTNRelease, function () {
        return gulp.src(`${projectDir}/${srcDir}/*.html`)
            .pipe(through2.obj(function (file, enc, cb) {
                file.contents = new Buffer(file.contents.toString().replace("${SCRIPT}", `<script src="${releaseOutputJs}"></script>`));
                cb(null, file);
            }))
            .pipe(gulp.dest(releaseDestDir));
    });

    gulp.task(buildTsTNDebug, function () {
        console.log(srcArray);
        return gulp.src(srcArray)
            .pipe(sourceMaps.init())
            .pipe(ts({out: debugOutputJs, target: "ES5", sortOutput: true}))
            .pipe(concat(debugOutputJs))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(debugDestDir));
    });

    gulp.task(buildTsTNRelease, function () {
        console.log(srcArray);
        return gulp.src(srcArray)
            .pipe(ts({out: releaseOutputJs, target: "ES5", sortOutput: true}))
            .pipe(uglify())
            .pipe(gulp.dest(releaseDestDir))
    });

    gulp.task(projectName, [buildHtmlTNDebug, buildHtmlTNRelease, buildTsTNDebug, buildTsTNRelease]);
    allTargets.push(projectName);
};

require("./examples/HelloWorld/gulpfile");
require("./examples/ValueChange/gulpfile");
require("./examples/Clock/gulpfile");
require("./examples/HBox/gulpfile");
require("./examples/CustomContextMenu/gulpfile");
require("./examples/TextInput/gulpfile");
require("./examples/Title/gulpfile");
require("./examples/RenderApplication/gulpfile");

gulp.task("default", allTargets);