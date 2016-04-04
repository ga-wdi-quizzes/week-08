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
```
(function(){
  angular
  .module("BlogPost", [
    "ui.router"
  ]);
  })();

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

> ...
They both are examples of declaring methods on a controller that calls a create method when clicking the button. Adding data to ng-click allows the directive elements to be read by the html validator.

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

> ...
A represents the best usage of ng-app. When ng-app is put within the html tag at the top of the page, tells AngularJS to be active for the entire document. This is important because it sets the scope of the entire single page app using proper styling as according to John Papa's style guide.

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

> ...
An IIFE is an immediately invoked function expression. They remove variables from their global scope. This prevents variables and function declarations, which also helps avoid variable collisions and having too many global variables.

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> ...
ui-sref binds links to the a state (e.g. new page), and is used in the the index.html file. The sref component of the router checks to see if a state exists,  and return the url for that state if it does. It is used in the following syntax <data-ng-sref=stateName"{{param: }}">

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> ...
Line 3 will throw an error because the use of "use strict" changes JS into expert mode which requires all variables to be defined. In this case, "i" should be defined as var i.

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
<my-custom-directive>Hi, my name is Max</my-custom-directive>
<div class ="my-custom-directive"></div>
```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> ... Option B is the best method of organizing files in an Angular app. According to John Papa's styleguide, each folder should correlate to the feature it represents, in this case songs and artists. This allows for the most intuitive application structure, and will help when trying to find files . Option A should be avoided because organizing folders by type because as the amount of controllers and views increase in the app, it will be harder and harder to locate files.

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
