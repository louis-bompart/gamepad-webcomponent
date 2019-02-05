const gulp = require("gulp");
const spawn = require("child_process").spawn;
const rimraf = require("rimraf");
const tsconfig = require("./tsconfig.json");
const log = require("fancy-log");

const spawnOptions = {
  shell: true,
  stdio: "inherit"
};

const outputDir = tsconfig.compilerOptions.outDir;

/**
 * Gulp task to run `polymer serve`.
 */
const serve = () => {
  spawn("polymer", ["serve"], spawnOptions);
};

/**
 * Gulp task to run `tsc --watch`.
 */
const build = () => {
  spawn("tsc", ["--watch"], spawnOptions);
};

/**
 * Gulp task to clean the Typescript output directory.
 */
const clean = async () => {
  return new Promise((resolve, reject) => {
    log("Cleaning...");
    rimraf(outputDir, err => {
      if (err) {
        log.error(
          `Error while cleaning, you may want to clean the '${outputDir}' directory manually.`,
          err
        );
        return reject(err);
      }
      log("Cleaning done!");
      return resolve();
    });
  });
};

module.exports = {
  default: gulp.series(clean, gulp.parallel(build, serve)),
  serve: serve,
  build: build,
  clean: clean
};
