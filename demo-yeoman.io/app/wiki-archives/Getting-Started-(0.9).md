## Quick start

Yeoman supports a powerful set of high-level commands. These include:

```sh
yeoman init      # Initialize and scaffold a new project using generator templates
yeoman build     # Build an optimized version of your app, ready to deploy
yeoman server    # Launch a preview server which will begin watching for changes
yeoman test      # Run a Mocha test harness in a headless Phantom.js

yeoman install   # Install a package from the client-side package registry
yeoman uninstall # Uninstall the package
yeoman update    # Update a package to the latest version
yeoman list      # List the packages currently installed
yeoman search    # Query the registry for matching package names
yeoman lookup    # Look up info on a particular package

```

A common initial workflow with Yeoman might be:

```sh
yeoman init      # Invoke the most basic application scaffold (Bootstrap, Boilerplate etc.)
yeoman build     # Build your project, creating an optimized version in a new `dist` directory
yeoman server    # Fire off a file watch/server process which also places an
                 # intermediate build of your project in `temp`
```

Some more examples of how to use our commands include:

```sh
# Generators for MVC/MV* Frameworks
yeoman init quickstart                   # Skip our questions and get a H5BP, jQuery and Modernizr base
yeoman init bbb                          # Backbone Boilerplate generator scaffold
yeoman init ember                        # Ember-Rails generator scaffold
yeoman init backbone                     # Backbone-Rails generator scaffold

# Coming soon
yeoman init angular                      # Invoke the AngularJS generator scaffold
yeoman init angular:controller           # Invoke the AngularJS Controller sub-generator

# Generator for Chrome Apps
yeoman init chromeapp

# Package management
yeoman search jquery                       # Lookup jQuery in the Bower registry
yeoman install jquery underscore [depName] # Install a dependency or dependencies
yeoman update jquery                       # Update a specific dependency (e.g jquery)
```