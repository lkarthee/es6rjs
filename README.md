# es6rjs

## Overview

es6rjs is a fork of Web Starter Kit.
[Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) is an opinionated boilerplate for web development.

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Responsive boilerplate | A responsive boilerplate optimized for the multi-screen web. Powered by [Material Design Lite](http://getmdl.io).  You're free to use either this or a completely clean-slate  via [basic.html](https://github.com/google/web-starter-kit/blob/master/app/basic.html).                          |
| Sass support                           | Compile [Sass](http://sass-lang.com/) into CSS with ease, bringing support for variables, mixins and more. (Run `gulp serve` or `gulp` for production)                                                                                                      |
| Performance optimization               | Minify and concatenate JavaScript, CSS, HTML and images to help keep your pages lean. (Run `gulp` to create an optimised version of your project to `/dist`)                                                                                                |
| Code Linting               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Web Starter Kit uses ESLint with [eslint-config-google](https://github.com/google/eslint-config-google), which tries to follow the Google JavaScript style guide.                                                                                                |
| ES2015 via Babel 6.0                   | Optional ES2015 support using [Babel](https://babeljs.io/). To enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the [.babelrc](.babelrc) file. ES2015 source code will be automatically transpiled to ES5 for wide browser support.  |
| AMD support using [RequireJS](http://requirejs.org/), [es2015-modules-umd](http://babeljs.io/docs/plugins/transform-es2015-modules-umd/) and [add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports) | main.js contains require.config which bootstraps dependencies. .babelrc entry - `"plugins": ["add-module-exports","transform-es2015-modules-umd"]` |
| Built-in HTTP Server                   | A built-in server for previewing your site locally while you develop and iterate                                                                                                                                                                            |
| Live Browser Reloading                 | Reload the browser in real-time anytime an edit is made without the need for an extension. (Run `gulp serve` and edit your files)                                                                                                                           |
| Cross-device Synchronization           | Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by [BrowserSync](http://browsersync.io). (Run `gulp serve` and open up the IP provided on other devices on your network)                       |
| Bower |  bower_components are integrated into `gulpfile.babel.js` so that `gulp serve` will pickup the dependencies correctly while developing.  |

## Quickstart

Clone this repository and build on what is included in the `app` directory.

There are two HTML starting points, from which you can choose:

- `index.html` - the default starting point. Its minimal with all dependencies setup. It contains requirejs entry point - `main.js`

Be sure to look over the [installation docs](docs/install.md) to verify your environment is prepared to run.
Once you have verified that your system can run app, check out the [commands](docs/commands.md) available to get started.

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

* Chrome
* Edge
* Firefox
* Safari
* Opera
* Internet Explorer 9+

This is not to say that Web Starter Kit cannot be used in browsers older than those reflected, but merely that our focus will be on ensuring our layouts work great in the above.

## Troubleshooting

If you find yourself running into issues during installation or running the tools, please check  [WSK-Troubleshooting](https://github.com/google/web-starter-kit/wiki/Troubleshooting) guide and then open an issue.

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.babel.js`, `.jshintrc` and `.travis.yml`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Docs and Recipes

* [File Appendix](https://github.com/google/web-starter-kit/blob/master/docs/file-appendix.md) - What do the different files here do?
* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Inspiration

es6rjs is fork of Web Starter Kit, generator-gulp-webapp adnd.

Web Starter Kit is inspired by [Mobile HTML5 Boilerplate](https://html5boilerplate.com/mobile/) and Yeoman's [generator-gulp-webapp](https://github.com/yeoman/generator-webapp), having taken input from contributors to both projects during development. Our [FAQs](https://github.com/google/web-starter-kit/wiki/FAQ) attempt to answer commonly asked questions about the project.

## License

For all the artifacts from Web Starter Kit - the following license applies
Apache 2.0  
Copyright 2015 Google Inc

For the Rest:
Apache 2.0
Copyright 2016 lkarthee

Any other inclusions from other projects - respective license applies:
