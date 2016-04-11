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
[ x] C: <button data-ng-hide="status">Click</button>
[ ] D: <button>{{status}}</button>
```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

**Your answer: function wise, there really isn't a difference. In terms of HTML, the difference is that in validators, it will not recognize ng-click and won't know what to do with it so it will ignore it. Putting Data first makes the html valid  as **

> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**I would choose A because B will only be recognized in the head as the ui-sref is in the body. The best place to put it ideally would be in the body so the app can run faster but in C, ng app is within a div and is also below the directive. Html would need to render the app first so it can know what to do. So because of this, I chose A because it's properly placed in a html root element, the whole document will read it and any directive can connect with it no matter where it's placed.**

> ...

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
[ x] C: Two-way data-binding
[ ] D: Separation of concerns
```

## Question 6

What is an IIFE, and why might you use it?

**Your answer: an iffe invokes the angular module immediately once loaded. It's also a way for us to keep all of our functions for our model wrapped into one. **

> ...

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer: the ui-sref is a ui.router directive that we have access to and it is angulars version of href. It does the same thing by linking to whatever state or url you link it to**

> ...

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer: line 3 because you cannot write i=1. In strict mode, var is required to initiate a variable. so it would have to be var i = 1. **

> ...

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

<div my-directive></div>
<div class="my-directive"></div>

```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer: I would choose 'A' because it separates the concerns more clearly. the app.js shouldn't be within any of the folders because it controls the entire app. within views should all the html files go because views deals with how the modules and controllers show on the actual site. It deals with html and html only. The directives are for custom modules we need for our app and in this case, its a form for both artists and songs. This js is not the same as the js files that's needed for the views. This is totally different and deals more with the function than the way it behaves and view. Those types for files should go into the controllers app because that's what it deals with. the specific modules and functions for the overall view for artists. In this case it controls the index page that shows all the artists and is linked to the index.html and the show controller for individual pages for artsts_index.html. The _form in directives and views has nothing to do with the overall CRUD, that's why the Separation of concerns is needed and I  chose A. The others are not as organized and are all over the place. Doesn't represent the MVC.  **

> ...


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
