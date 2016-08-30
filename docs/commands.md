There are many commands available to help you build and test sites. Here are a few highlights to get started with.

## Install Dependencies - bower and npm

```sh
$ npm install

```
This installs dependencies using npm.
```sh
$ bower install
```
This install dependencies using bower.

Note: Both npm and bower depedencies should be installed before using the template.

## Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.

## Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.

## Serve the Fully Built & Optimized Site

```sh
$ gulp serve:dist
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve:dist` includes will serve a local copy of the built and optimized site generated as part
of the `default` task.

## Difference Between `serve` & `serve:dist`

It is important to note a difference between the `serve` and `serve:dist` tasks.
The `serve` task runs on port 3000 and `serve:dist` runs on port 3001.
