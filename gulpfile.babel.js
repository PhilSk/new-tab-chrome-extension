import gulp from "gulp";
import loadPlugins from "gulp-load-plugins";
import webpack from "webpack";
import rimraf from "rimraf";

const plugins = loadPlugins();

import newTabWebpackConfig from "./newTab/webpack.config";

gulp.task("newTab-js", ["clean"], cb => {
    webpack(newTabWebpackConfig, (err, stats) => {
        if (err) throw new plugins.util.PluginError("webpack", err);

        plugins.util.log("[webpack]", stats.toString());

        cb();
    });
});

gulp.task("newTab-html", ["clean"], () => {
    return gulp
        .src("newTab/src/index.html")
        .pipe(plugins.rename("newTab.html"))
        .pipe(gulp.dest("./build"));
});

gulp.task("copy-manifest", ["clean"], () => {
    return gulp.src("manifest.json").pipe(gulp.dest("./build"));
});

gulp.task("clean", cb => {
    rimraf("./build", cb);
});

gulp.task("build", ["copy-manifest", "newTab-js", "newTab-html"]);

gulp.task("watch", ["default"], () => {
    gulp.watch("newTab/**/*", ["build"]);
});

gulp.task("default", ["build"]);
