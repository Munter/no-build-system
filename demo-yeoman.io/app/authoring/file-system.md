---
layout: documentation
title: Working With The File System
category: authoring
excerpt: How to interact with the file system in efficient ways
---

## Location contexts

Yeoman file utility are based on the idea you always have two location context on disk. These contexts are important as most file utility methods will act on file path relative to these contexts.

The first context is the _destination context_. The destination is the folder where you are writing, it is where you'll scaffold the application.

The destination context is defined as either the current working directory or the closest parent folder containing a `.yo-rc.json` file. The `.yo-rc.json` file define the root of a project, this allow the end user to run commands in subdirectories and have them works as expected.

You can get the _destination path_ using `generator.destinationRoot()`. And you can change it using `generator.destinationRoot('new/path')`.

The second context is the _source context_. This is the folder in which you store your templates files. It is usually the folder from which you'll read.

The source context is defined as `../templates` by default. You can get its value using `generator.sourceRoot()`, and you can change it using `generator.sourceRoot('new/path')`.

## File utilities

Based on the two context described before, a Yeoman generator expose two file utilities objects.

1. `this.dest` who's relative to `this.destinationRoot()`
2. `this.src` who's relative to `this.sourceRoot()`

There's also a top level `file` property who's not linked to any path. You can require it this way: `var file = require('yeoman-generator').file`.

These three objects are instances of [File-utils module](https://github.com/SBoudrias/file-utils), a `grunt.file` like standalone API. Refer to their documentation for a list of available methods.

### Copying a file

To copy a file from your `templates/` folder to the destination folder:

```js
this.dest.copy('Gruntfile.js', 'Gruntfile.js');
```

### Reading a json file

```js
var pkg = this.dest.readJSON('package.json');
```

## Legacy utilities

Yeoman also expose a set of legacy file utilities. You can refer to the [API documentation] to learn more about them. Some feature of the legacy system may still be missing from [File-utils](https://github.com/SBoudrias/file-utils), so feel free to rely on these methods when necessary.

Our goal however is to eventually deprecate these legacy methods. If you find missing methods you need, then please consider sending a Pull Request to [File-utils](https://github.com/SBoudrias/file-utils) and help us close the bridge between our legacy and our new system!

## Writing existing files

Updating an existing file is not always a simple task. The most reliable way to do so is to parse the file AST (_asynchronous syntax tree_) and edit it. The issue here is that playing with AST is quite verbose and quite hard to grasp.

To help simplify such case, Yeoman provide some common helper methods. Refer to the [API documentation](http://yeoman.github.io/generator/wiring.html) for the list of available methods.
