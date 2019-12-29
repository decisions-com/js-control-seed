This starter kit provides a test-bed powered by FuseBox, which provides a fast transpiler and bundler with very little configuration.

You can author a JS Control from the provided boilerplate in JavaScript or TypeScript.

The boilerplate class name is `JsControlName` which is also reflected in the `fuse.js` config.
The first thing you should do is a global find-replace of that string with the name of your control.

The TypeScript compiler will transpile TypeScript or ES6+ JavaScript to ES5 JavaScript.

## Commands

### TypeScript
These commands will pipe through `ts-control.ts`

``` shell
npm run start-ts       # launch dev server with HMR
npm run build-ts       # compile your JS control
```

### JavaScript
These commands will pipe through `js-control.js`
``` shell
npm run start-js       # launch dev server with HMR
npm run build-js       # compile your JS control
```

## The Result

The result of a build will
