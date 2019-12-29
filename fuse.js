const path = require('path');
const { src, task, exec, context } = require('fuse-box/sparky');
const {
  CSSPlugin,
  FuseBox,
  LESSPlugin,
  QuantumPlugin,
  SassPlugin,
  WebIndexPlugin,
} = require('fuse-box');

const JS_CONTROL_NAME = 'JsControlName';

context(
  class {
    getConfig() {
      return FuseBox.init({
        homeDir: 'src',
        target: 'browser@es5',
        output: this.isProduction ? 'dist/$name.js' : 'dev/$name.js',
        useTypescriptCompiler: true,
        // sourceMaps: { inline: this.isProduction && this.sourceMaps }, // not working, yet?
        plugins: [
          [
            SassPlugin(),
            CSSPlugin(
              this.isProduction && {
                outFile: file => `dist/${file}`,
                minify: false,
              }
            ),
          ],
          [
            LESSPlugin({
              paths: [path.resolve(__dirname, 'node_modules')],
            }),
            CSSPlugin(
              this.isProduction && {
                outFile: file => `dist/${file}`,
                minify: false,
              }
            ),
          ],
          CSSPlugin(
            this.isProduction && {
              outFile: file => `dist/${file}`,
              minify: false,
            }
          ),
          !this.isProduction && WebIndexPlugin(),
          this.isProduction &&
            QuantumPlugin({
              uglify: true,
              treeshake: true,
              bakeApiIntoBundle: JS_CONTROL_NAME,
              sourceMaps: {
                inline: this.isProduction && this.sourceMaps,
              },
              css: true,
            }),
        ],
      });
    }
  }
);

task('start-ts', async context => {
  await runDev(context, true);
});

task('start-js', async context => {
  await runDev(context);
});

task('dist-ts', async context => {
  await runProduction(context, 'ts-control.ts', JS_CONTROL_NAME);
});

task('dist-js', async context => {
  await runProduction(context, 'js-control.js', JS_CONTROL_NAME);
});

task('dist-ts-source-maps', async context => {
  await runProduction(context, 'ts-control.ts', JS_CONTROL_NAME, true);
});

task('dist-js-source-maps', async context => {
  await runProduction(context, 'js-control.js', JS_CONTROL_NAME, true);
});

async function runDev(context, ts = false) {
  const devEntry = ts ? 'index.ts' : 'index.js';
  const fuse = context.getConfig();
  fuse.dev(); // launch http server
  fuse
    .bundle(JS_CONTROL_NAME)
    .hmr()
    .watch()
    .instructions(`> ${devEntry}`);

  await fuse.run();
}

async function runProduction(context, entry, bundle, sourceMaps = false) {
  context.sourceMaps = sourceMaps;
  context.isProduction = true;
  const fuse = context.getConfig();
  fuse.bundle(bundle).instructions(`> [${entry}]`);

  await fuse.run();
}
