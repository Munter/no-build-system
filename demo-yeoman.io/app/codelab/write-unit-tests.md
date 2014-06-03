---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
---

# Test with Karma and Jasmine

For those unfamiliar with [Karma](http://karma-runner.github.io), it is a JavaScript test runner that is test framework agnostic. The Angular generator has two included test frameworks: [ngScenario](https://code.angularjs.org/1.2.16/docs/guide/e2e-testing) and [Jasmine](http://jasmine.github.io/). When we ran `yo angular` earlier in this codelab the generator scaffolded a ***test*** directory in the root of the ***mytodo*** folder, created a ***karma.conf*** file, and pulled in the Node modules for Karma.  We’ll be editing a Jasmine script to describe our tests soon but let’s see how we can run tests first.

## Run unit tests

Let’s go back to the command line and kill our Grunt server using <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span>. There is already a Grunt task scaffolded out in our ***Gruntfile.js*** for running tests. It can be run as follows:

```js
$ grunt test
```

When you run `grunt test`, you will see a new browser window quickly open and close, plus some warnings in the Yeoman console. Don’t worry, that’s to be expected right now since our tests are currently failing for two reasons. Let's fix that.

## Update unit tests

First, we need to update the Karma configuration to load the the new Bower components we installed in the [Step 7](install-packages.html#install).

Open ***karma.conf.js*** and replace the `files` array with:

```js
 files: [
  'app/bower_components/jquery/jquery.js',
  'app/bower_components/jquery-ui/ui/jquery-ui.js',
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-ui-sortable/sortable.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/angular-local-storage/angular-local-storage.js',
  'app/scripts/*.js',
  'app/scripts/**/*.js',
  'test/mock/**/*.js',
  'test/spec/**/*.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/bower_components/angular-cookies/angular-cookies.js',
  'app/bower_components/angular-sanitize/angular-sanitize.js',
  'app/bower_components/angular-route/angular-route.js'
],
```

<!--
So remember that we previously changed app/scripts/controllers/main.js to load items from localStorage? To keep your head from exploding, let’s work with some static todo items to keep things simple for these unit tests.

Replace the contents of main.js with the following:

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {

  $scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
});
```
-->

Second, we haven’t updated the boilerplate test which still references `awesomeThings`.

You’ll find the tests scaffolded out in the ***test*** folder, so open up **test/spec/controllers/main.js**. This is the unit test for your Angular MainCtrl controller that we need to modify.

Delete the following:

```js
it('should attach a list of awesomeThings to the scope', function () {
  expect(scope.awesomeThings.length).toBe(3);
});
```

And replace that test with the following:

```js
it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
});
```

Re-running our tests with `grunt test` should see our tests now passing:

![](/assets/img/codelab/image_33.png)

The above test only covers part of our app's functionality so let’s add a couple of more tests to test the adding and removing of items:

```js
it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
 ```

Your full MainCtrl test script (*test/spec/controllers/main.js*) should now look like this:

```js
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
```


Running the tests again, we should see everything pass with 3 tests being executed:

![](/assets/img/codelab/image_34.png)

Fantastic!

Writing unit tests make it easier to catch bugs as your app gets bigger and when more developers join your team. The scaffolding feature of Yeoman makes writing unit tests easier so no excuse for not writing your own tests! ;)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="local-storage.html">Go to the next step &raquo;</a>
</p>
