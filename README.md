# Decisions JavaScript Control Seed.

This starter kit provides a development sandbox powered by [Webpack](https://webpack.js.org/) dev server with live reloading. 

## Requirements

This project relies on NodeJS 8.2+ for dev server and compilation.

## Language

A JS Control can be authored from the provided boilerplate in either JavaScript or TypeScript.

The boilerplate class name is `JsControlName` which is also reflected in [js-control.config.js](./js-control.config.js) 
The first thing you should do is a global find-replace of that string with the name of your control.

This configuration uses `ts-loader` to transpile TypeScript, or ES+ JavaScript to ES5 JavaScript.

Styles can be written in CSS, SASS, or LESS. The CSS file for control styles will need to be uploaded
to Decisions.

## Parts

1. index.ts / index.js - create a frame-app where you can perfect your control locally,
   prior to uploading to Decisions
1. js-control.config.js - configure your js control
    - Are you using TypeScript? What is your control's name, etc.
    - add any dependencies you do not wish Webpack to bundle.
    _Checking this file will also show you some of the common/larger libraries are available to you in the Decisions UI runtime._
1. value.js - edit this to reflect your control's model
1. js-control.js / ts-control.ts - the control file itself. This is ES6+ / TS boilerplate for a control.
1. js-control.css - boilerplate CSS file

## Bundling Warning
Webpack provides a convenient way to bundle any referenced modules into your JavaScript control, `.js` file, but if any included library is large, or would be included in multiple JavaScript controls, it should be added as a [Script Control](https://documentation.decisions.com/docs/javascript-control-using-library), and added to the `externals` object in [js-control.config.js](./js-control.config.js).

## Commands

Below are the npm script commands available.

#### `npm run start`
Launch dev sandbox, in order to dial in your control prior to uploading it to Decisions.

#### `npm run build`
Compile your JS control and create a JS bundle you can upload. This has a hashed file-name to help with cache busting.

#### `npm run build-map`
Compile your JS control with heavy, but helpful inline source-maps. These will enable you to debug your control within Decisions, but add significant bloat to the JS file size. For debugging only.

#### `npm run tsc`
Just compile your JS control to ES5. Use this if you aren't interested in any of the Webpack features and just want to use the boilerplate to get you started.

## The Result

The result of a build be a JS file of your control's name, and corresponding CSS file(s). Remember you'll need to upload your CSS file(s) to Decisions and add them to the controls. Remember, this is a starting point, and the rest is up to you.
