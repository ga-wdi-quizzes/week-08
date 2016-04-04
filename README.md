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

"use strict";

(function() {
  angular
  .module("BlogPost", [
    "ui.router";
  ])
})():

```

## Question 2

Given a custom directive whose `link` function contains the line:

```js
scope.status = "Click";
```

Which *one* of the following buttons would *not* be displayed?

```html
[ ] A: <button data-ng-if="status">Click</button>
[ ] B: <button data-ng-show="status">Click</button>
[ ] C: <button data-ng-hide="status">Click</button>
[X] D: <button>{{status}}</button>
```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

**Your answer:**

> Functionally, there is zero difference. Placing "data" in front of "ng-click" allows the html to pass a validator test.

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

> [A]  The data-ng-app designates which HTML element is the root directory of the angular application.  In other words, it defines the HTML element where all the angular activity will take place.  As a general rule, it is good practice to designate the HTML tag as the root directory, because no matter where you end up implementing angular, it will be within the ng-app domain.

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
[x] C: Two-way data-binding
[ ] D: Separation of concerns
```

## Question 6

What is an IIFE, and why might you use it?

**Your answer:**

> IIFE stands for immediately-invoked function expression. IIFE's are utilized in angular because IIFEs limit the scope of the variables within it and the code will be executed as soon as it is loaded.  So within an IIFE, we can create a new angular module and not have to worry about global variables and the arguments mixing with other program elements.

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> The ui-sref is an angular directive that binds links on an HTML page to a specific angular state.  Clicking the link will change to that state. (<a data-ui-sref="new">New Item</a>)  

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> Line 3.  When setting the parameters for the for loop, i has not yet been defined.  You probably need it to be: for(var i = 1; i < max; i++)

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
Custom directives can be restricted four different ways.  E - available as an HTML element, A - available as an HTML attribute, C - available as a class, M - available as a comMent.

(function() {
  angular
  .module("quiz")
  .directive("my-directive", function() {
    return {
      template: "<h1>This is a custom element.</h1>",
      restrict: "E"
    }
  })
})();

<my-directive></my-directive>

(function() {
  angular
  .module("quiz")
  .directive("my-directive", function() {
    return {
      template: "<h1>This is a custom element.</h1>",
      restrict: "A"
    }
  })
})();

<p my-directive></p>

```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> [B]


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
