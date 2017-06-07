var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
//引入压缩CSS的模块
var minifycss = require('gulp-minify-css');
gulp.task("sass",function(){
	gulp.src("*.scss")//源文件
	.pipe(sass())//做sass预编译（做什么样的处理）
	.pipe(gulp.dest("css/"));//把结果放在何处。	
});

//合并并压缩
gulp.task("uglify",function(){
	gulp.src(["js/index.js","js/index1.js"])
	.pipe(concat("index.js"))//合并
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/js"));
});
gulp.task("concatuglifyrename",function(){
	gulp.src(["js/index.js","js/index1.js"])
	.pipe(concat("index.js"))//合并
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//压缩
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("dist/js"));
});
gulp.task("copy-index",function(){
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/huawei"));
});
gulp.task("copy-img",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("D:/phpStudy/WWW/huawei/img"));
	gulp.src("img/img/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/img/img"));
});
gulp.task("copy-img2",function(){	
	gulp.src("img/*/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/img/img"));
});
gulp.task("copy-js",function(){
	gulp.src("js/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/js"));
});
gulp.task("copy-css",function(){
	gulp.src("css/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/css"));
});
gulp.task("copy-php",function(){
	gulp.src("*.php").pipe(gulp.dest("D:/phpStudy/WWW/huawei/"));
});
gulp.task("copy-json",function(){
	gulp.src("*.json").pipe(gulp.dest("D:/phpStudy/WWW/huawei/"));
});
gulp.task("copy-houitai",function(){
	gulp.src("houtai/*/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/houtai"));
	gulp.src("houtai/*").pipe(gulp.dest("D:/phpStudy/WWW/huawei/houtai"));
});
gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("js/*",["copy-js"]);
	gulp.watch("css/*",["copy-css"]);
	//gulp.watch("img/*",["copy-img"]);
	gulp.watch("*.scss",["sass"]);
	gulp.watch("*.php",["copy-php"]);
	gulp.watch("img/*/*.jpg",["copy-img2"]);
	gulp.watch("*.json",["copy-json"]);
	gulp.watch("houtai/*/*",["copy-houitai"]);
});  

