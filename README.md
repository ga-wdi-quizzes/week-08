# Week 08

## Instructions

1. Fork this repo.
- Clone your fork.
- Fill in your answers by writing the appropriate area, or placing an 'x' in the square brackets for multiple-choice questions.
- Add/Commit/Push your changes to Github.
- Open a pull request.

## Question 1

Instantiate a new Angular module called `BlogPost` that takes `ui.router` as a dependency. Use Angular code style conventions.

**Your answer:**
```js
angular.module("BlogPost"),["ui.router"])
       .config (function($stateProvider){
        $stateProvider.state(stateName,stateConfig);
       })
```

## Question 2

Given a custom directive whose `link` function contains the line:

```js
  function DirFunction(){
    return {
      scope: {something},
      link: function(scope){
	    scope.status = "Click";
    }
  }
```

Which *one* of the following buttons would *not* be displayed?

```html
[ ] A: <button data-ng-if="status">Click</button>
[ ] B: <button data-ng-show="status">Click</button>
[X] C: <button data-ng-hide="status">Click</button>
[ ] D: <button>{{status}}</button>
```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

**Your answer:**

data- - validator will ignore anything with data- in front of it if not HTML validator will throw an error - functionally they are the same.

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

A - take it from me I tried the other way you don't want to do it. Because ng-app is where the scope where our ap can operate is defined in B it excludes the body. in C it includes just the div.

### A:
```html
<!DOCTYPE html>
<html data-ng-app="myapp">
  <head>
    <title>My app</title>
  </head>
  <body>
    <h1><a data-ui-sref="index">My App</a></h1>
    <div></div>
  </body>
</html>
```

### B:
```html
<!DOCTYPE html>
<html>
  <head data-ng-app="myapp">
    <title>My app</title>
  </head>
  <body>
    <h1><a data-ui-sref="index">My App</a></h1>
    <div></div>
  </body>
</html>
```

### C:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My app</title>
  </head>
  <body>
    <h1><a data-ui-sref="index">My App</a></h1>
    <div data-ng-app="myapp"></div>
  </body>
</html>
```

## Question 5

Imagine an app in which a change to the view updates the model without a page refresh, and a change to the model updates the view without a page refresh.

Which one of the following concepts does this best illustrate?

```
[ ] A: Modularity
[ ] B: MVC
[X] C: Two-way data-binding
[ ] D: Separation of concerns
```

## Question 6

What is an IIFE, and why might you use it?

**Your answer:**

Immediately Invoked Function Expression, an IIFE is a function that calls itself as soon as it's defined
the advantage of it is that variables inside IIFE don't go into global scope and considerably speeds up your ap
so good practice to wrap your entire Angular ap inside an IIFE this keeps the global scope clear.

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**
it's a directive that binds a link (<a>tag) to a state (in Angular thats a url that has a template and controller attached). If the state has an associated URL, the directive will automatically generate and update the href attribute via the $state.href() method. Clicking the link will trigger a state transition with optional parameters
it's a directive for linking information from different states on the page - you can also use relative state paths within ui-sref, just like the relative
paths passed to $state.go() you just have to be careful because it is relative to the the state that the link lives in.

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

Line 3 will - because of "use strict" - you would need var i =, defined under strict javascript rules.

```js
/*1*/ "use strict";
/*2*/ var max = 100;
/*3*/ for(i = 1; i < max; i++){
/*4*/   if(i % 15 == 0) console.log("FizzBuzz");
/*5*/   else if(i % 3 == 0) console.log("Fizz");
/*6*/   else if(i % 5 == 0) console.log("Buzz");
/*7*/   else console.log(i);
/*8*/ }
```

## Question 9

Custom directives can be embedded in HTML four different ways. Demonstrate **two** of these four with a directive called `my-directive`. (Hint: "MACE")

**Your answer:**

```html
Comment, Attribute, Class, Element
restrict: 'C'

The directive can appear only inside a class attribute of a HTML element.

<div class="my-directive"></div>
or
<my-directiv></my-directive>

go to js/aps/ap.directives.js
(function()){
  angular
  .module('aps')
  .directive("myDirective", function())
  return {
    template: '<h1>SOMETHING</h1>'
  }

});
})();

add <script src="js/aps/ap.directive.js"></script> to the aps main index.html.


```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

Option B because it separates the files by artists and songs, each ones forms directives..here the things that are related are close to each other and easily accessable.


### A:
```
/js
  app.js
  controllers/
    artist_index.js
    artist_show.js
  directives/
    artist_form.js
    song_form.js
  views/
    artist_index.html
    artist_show.html
    artist_form.html
    song_form.html
```

### B:
```
/js
  app.js
  artists/
    index.controller.js
    index.html
    show.controller.js
    show.html
    form.directive.js
    form.html
  songs/
    form.html
    form.directive.html
```

### C:
```
/js
  app.js
  controllers/
    artists_controller.js
  directives/
    songs_directive.js
/html
  artists/
    index.html
    show.html
    form.html
  songs/
    form.html
```
