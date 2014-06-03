---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
---

# Let's Scaffold a Web App with Yeoman

<p class="authors">By Addy Osmani, James Cryer &amp; Pearl Chen</p>

Allo! Allo! In this 1-hour codelab, you build a fully functional web application from scratch with the help of [Yeoman](http://yeoman.io). You'll also use features from [Grunt](http://gruntjs.com) and [Bower](http://bower.io). The sample app will be written in [AngularJS](http://angularjs.org).

<p class="mast-intro"><img src="/assets/img/yeoman-008.png"></p>

Haven't met Yeoman yet? [Start here with an introduction &raquo;](codelab/meet-yeoman.html)

<!-- The command line is where Yeoman, Grunt, and Bower commands are typed. If you're not familiar with your operating system's command line, here's a [cheatsheet to keep handy &raquo;](cli-cheatsheet.html) -->

Don't know any AngularJS? That's okay, we'll walk you through it. However we do assume that you have some previous JavaScript experience.

## Build this sample app with Yeoman

The sample web app you'll build today will be a Todo app. You will be able to add todos, delete todos, organize your todos using drag and drop, and save todos offline.

![Finished todo app](/assets/img/codelab/image_2.png)

<h2 id="toc">What's in this codelab?</h2>

We will build the above Todo app from scratch. Each step builds on the previous so go through each step one by one.

* **Step 1:** [Set up your dev environment &raquo;](codelab/setup.html)
* **Step 2:** [Install a Yeoman generator &raquo;](codelab/install-generators.html)
* **Step 3:** [Use a generator to scaffold out your app &raquo;](codelab/scaffold-app.html)
* **Step 4:** [Review the Yeoman-generated app directory structure &raquo;](codelab/review-generated-files.html)
* **Step 5:** [Preview your app in the browser &raquo;](codelab/preview-inbrowser.html)
* **Step 6:** [Start writing our AngularJS application &raquo;](codelab/write-app.html)
* **Step 7:** [Use Bower to install packages &raquo;](codelab/install-packages.html)
* **Step 8:** [Test with Karma and Jasmine &raquo;](codelab/write-unit-tests.html)
* **Step 9:** [Make todos persistent with local storage &raquo;](codelab/local-storage.html)
* **Step 10:** [Get ready for production &raquo;](codelab/prepare-production.html)
* Like what you see? [Yeoman can do more &raquo;](codelab/keep-going.html)

It will take approximately 60 minutes to complete this codelab. By the end, you'll have a snazzy Todo app and your computer will be set up to build even more awesome web apps in the future.

<div class="note important" id="source-files">

  <h2>View the final source code</h2>

  <p>The finished app can be found at <a href="http://bit.ly/yoangular">bit.ly/yoangular</a>. In case you get stuck, these are the specific files that we will be editing in the <strong>angular-localStorage-todos &gt; app</strong> folder:</p>

  <ul>
    <li>
      <a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/index.html">index.html</a>
    </li>
    <li>
      views &gt;
      <a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/views/main.html">main.html</a>
    </li>
    <li>
      scripts &gt;
      <a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/scripts/app.js">app.js</a></li>
    <li>
      scripts &gt; controllers &gt;
      <a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/scripts/controllers/main.js">main.js</a>
    </li>
  </ul>

  <p>Note: To run the app after downloading the source code, run <code>npm install</code> followed by <code>bower install</code> in the <strong>angular-localStorage-todos</strong> directory. Then you can run <code>grunt serve</code>.</p>

</div>

<div class="note tip">

  <p>Enjoy coding in the cloud? Don't have administrative access to your computer? <a href="https://github.com/codio/tutorial_yo_angular">Try this codelab in the Codio Web IDE</a>.</p>

  <p>To keep your Yeoman environment set up on your local computer for future development, continue to Step 1.</p>

</div>

<p class="codelab-paging">
  Let's get started with
  <a href="codelab/setup.html">Step 1 &raquo;</a>
</p>
