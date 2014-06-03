---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
---

# Use a generator to scaffold out your app

We've used the word "scaffold" a few times but you might not know what that means. Scaffolding, in the Yeoman sense of the word, means generating files for your web app based on your specific configuration requests. In this step, you'll see how Yeoman can generate files specifically for Angular apps &mdash; with options for using other external libraries like SASS and Twitter Bootstrap &mdash; with minimal effort.

## Access generators via the Yeoman menu

Once a generator has been installed it can be accessed via the Yeoman interactive menu:

```js
$ yo
```

If you have a few generators installed, you'll be able to interactively choose from them:

![](/assets/img/codelab/image_7.png)

<div class="note important">

  <h2>But wait!</h2>

  <p>Don’t run a generator in any old place on your computer. First, make a project directory where the generator will place your scaffolded project files.</p>

</div>

Highlight **Get me out of here!** to exit the menu.

## Create a project folder

Create a ***mytodo*** folder for all your codelab work:

```js
$ mkdir mytodo
$ cd mytodo
```

## Scaffold out your Angular app

Now run `yo` again to see your generators:

```js
$ yo
```

Highlight **Run the Angular generator**. Hit **enter** to run the generator.

<div class="note tip">

  <h2>Use generators directly</h2>

  <p>As you become more familiar with <code>yo</code>, you can run generators directly without the use of the interactive menu, like so:</p>

<pre>
$ yo angular
</pre>

</div>

<h2 id="configure">Configure your generator</h2>

Some generators will also provide optional settings to customize your app with common developer libraries to speed up the initial setup of your development environment.

The AngularJS generator provides options to use [Sass](http://sass-lang.com/) (with [Compass](http://compass-style.org)) and include [Twitter Bootstrap](http://getbootstrap.com/). For this codelab, we **won't** use Sass but **will** use Bootstrap. Enter `n` then `y` respectively to these options.

![](/assets/img/codelab/image_8.png)

Next, you are prompted to select what Angular modules you would like to include as well:

![](/assets/img/codelab/image_9.png)

Angular modules are self-contained JavaScript files with helpful functionality. For example, the ngResource module (*angular-resource.js*) provides interaction support with RESTful services.

You can deselect and select options using the spacebar.

Let’s roll with the defaults. (So if you have been playing around with the spacebar, make sure that all the modules are marked as green.)

Hit **enter** and watch the magic happen.

![](/assets/img/codelab/image_10.png)

Yeoman will automatically scaffold out your app, grab your dependencies, and pull in a few useful Grunt tasks for your workflow. After a few minutes we should be ready to go onto the next step.

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="review-generated-files.html">Go to the next step &raquo;</a>
</p>
