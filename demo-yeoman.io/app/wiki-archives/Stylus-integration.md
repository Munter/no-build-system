# Get the Gist of It
Download [here](https://gist.github.com/ffcbf037e6e856e1010d)

# How-To

## Part I: Grunt

### Add `grunt-contrib-stylus` as a `devDependency`

Run `npm install -D grunt-contrib-stylus`. This will add it to your `package.json` after installing.

(If you want to use the node-canvas fallback for gradients, you may also run `npm install -D canvas`. See nib doc.)


### Declare the task in `Gruntfile.js`

```
  grunt.loadNpmTasks('grunt-contrib-stylus'); // might not be necessary if you are using load-grunt-tasks
  grunt.registerTask('compass', ['stylus']);
```

Note: If the app wasn't using compass and you're not overwriting it, you will need to add 'stylus' (or 'stylus:compile' if you introduce other properties) to the array passed into the appropriate grunt.registerTask() functions

## Part II: Stylus

### Configure Compilation

```
    stylus: {
      compile: {
        options: {
          compress: true,
          paths: ['node_modules/grunt-contrib-stylus/node_modules']
        },
        files: {
          'app/styles/*.css': ['app/styles/*.styl']
        }
      }
    },
```

The `paths` definition let you do `@import 'nib'` in stylesheets.



### Configure `--watch` Behavior
```
      stylus: {
        files: [
          'app/styles/**/*.styl'
        ],
        tasks: ['stylus']
      },
```

## Part III (optional): Delete the Compass and Compass watch configurations