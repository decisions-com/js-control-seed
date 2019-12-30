# Decisions JavaScript Control Seed.

This starter kit provides a test-bed powered by [FuseBox](https://fuse-box.org/), which provides a fast transpiler and bundler with very little configuration.

## Requirements

This project relies on NodeJS 8.2+

## Language

A JS Control can be authored from the provided boilerplate in either JavaScript or TypeScript.

The boilerplate class name is `JsControlName` which is also reflected in the `fuse.js` config.
The first thing you should do is a global find-replace of that string with the name of your control.

The TypeScript compiler will transpile TypeScript or ES6+ JavaScript to ES5 JavaScript.

Styles can be written in CSS, SASS, or LESS. A separate file for control styles will need to be uploaded
to Decisions.

## Parts

1. index.ts / index.js - create a frame-app where you can perfect your control locally,
   prior to uploading to Decisions
1. value.js - edit this to reflect your control's model
1. js-control.js / ts-control.ts - the control file itself. This is ES6+ / TS boilerplate for a control.
   - If you rename this file, you'll need to update [fuse.js]('./fuse.js') configuration to reflect that
1. js-control.css - boilerplate CSS file

## Commands

### TypeScript

These commands will pipe through `ts-control.ts`

```shell
npm run start-ts       # launch dev server with HMR
npm run build-ts       # compile your JS control
```

### JavaScript

These commands will pipe through `js-control.js`

```shell
npm run start-js       # launch dev server with HMR
npm run build-js       # compile your JS control
```

## The Result

The result of a build be a JS file of your control's name, and corresponding CSS file(s). Remember you'll need to upload your CSS file(s) to Decisions and add them to the controls. Remember, this is a starting point, and the rest is up to you.
