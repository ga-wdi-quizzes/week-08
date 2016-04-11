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
.module("BlogPost", [
  "ui.router"
])
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

They both will perform the same ng-click (angular click) function, but the data-ng-click button's HTML will validate in an HTML validator. The 'data-' tells the HTML validator to disregard what comes after it.
> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

Option A is the best usage of 'ng-app'. The 'ng-app' attribute declares that everything within it will be contained within the scope of the entire app. Often, this means it should be declared on the outermost HTML element, such as the <html> tag. It should not be declared in the <head> tag, because then it is closed out at the </head> tag before the application's functionality begins. In option C, it does not encompass some elements of the application, such as a data-ui-sref link which needs to be encompassed within the boundaries of the application.

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
[X] C: Two-way data-binding
[ ] D: Separation of concerns
```

## Question 6

What is an IIFE, and why might you use it?

An IIFE is an immediately invoked function expression. In angular, we always encompass our code in an IIFE to remove variables from the global scope and prevent helps to avoid negative variable interactions when the code is compiled into one single file (which angular does).

> ...

## Question 7

What is the `ui-sref` directive, and how is it used?

The ui-sref directive is similar to the standard html <a href="URL"></a>. You use the directive within an <a> tag, and you declare where you would like the link to go. This is different from an <a href="URL"> tag in HTML because you are not going to a unique page with angular--since you have created a single page aplication, you are actually going to a different state.

> ...

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

Line 3 will throw an error because you have not declared var i=1; you're going straight into i=1 without defining what "i" is.

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
<div class="my-directive"></div>
<my-directive></my-directive>
```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

I believe that option B is considered the "better" way to organize your files in an angular application. The app.js file should be in the main directory, and the individual js files should be contained within directories for their specific concern (ie. artists and songs). This allows for separation of concerns and keeps the files that are going to be inter-related in one place while separating them from others that they will not be interacting with. You can therefore have a unique form.directive.js for artists and songs without them interfering with one another, since their paths will be unique.
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
