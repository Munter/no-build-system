Who am I

Why do we need a build system?
- Speed
- Latency
- A transport detail --> Point: Optimizaion is a transport detail


Where did we come from?
- Simple development cycle
- Development loop: Edit, reload, inspect, reflect
- Deploy escapes loop
- Simplicity: View Source - This is how we learned
- Optimization was not a factor (ignorance)


Where are we now?
- Complex development cycle
- Transport optimization is the baseline
- Development loop: Edit, precompile with sourcemaps, sprite, concat, minify, livereload (TODO: MORE)
- Good tools
    - Livereload
    - Developer tols
    - Emmet livestyle
- Bad tools
    - Add complexity: Configuration, Compile time, Source maping
    - Spriting: Not even source mapped
    - Hires images and responsive images
    - Production uild configuration that leaks into development
- Point: Premature optimization is the root of all evil. If you optimize for transport during development you increase the complexity of your development loop


Our current production build
- Input --> transform --> output. Grunt has a chain of these. Gulp has a stream: Input --> transform --> transform -> output
- People think the transform part is the difficult one. It's not
- Asset discovery is difficult. Context is difficult. This is left up to the developer as an excercise in configuration.
- Grunt 800 lines of config. Gulp less.
- We're all reimplementing the same optimizations through individual configuration.
- Our production build systems are not clever enough, so it bleeds into the development loop.
- Something is missing. Something to bridge the gap between the simplicity of developing for the browser and the complexity of optimizing for transport


TODO:
Manifests vs explicit dependencies
- Manifests describe implicit dependencies. A manifest is not a dependency description, but a result of dependency traversal. The knowledge of dependencies is hidden inside the developers head.
- Grunt configurations are manifests. Gulp configurations are manifests.
- Seperate CSS dependency chains make the root CSS file a manifest.
- The crucial change that allowed us to desribe dependency graphs completely was CJS/AMD. Suddenly Javascript could have dependencies. Not only on Javascript, but on any other type of asset. This is how we can build web components. The missing link. (actually we had two and they had a battle. Slide: Two ugly snowmen battling)

AssetGraph
- A data model to describe all assets and relations. Not a build system
- Not just make-type dependencies with file1 depending on file2. Full context from individual asset model instance. Script node src attribute depends on javasript etc.
- A population method for automatic discovery of dependencies and expansion of the graph model
- A transform queue to manipulate the data model
- A query library to find the assets or relations you want to manipulate
