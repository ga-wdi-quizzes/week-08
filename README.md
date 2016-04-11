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
(function(){
  angular
  .module("BlogPost", [
    "ui.router"
  ])  
}());


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
'data-ng-click' will let html file pass the html validating process.
```

**Your answer:**

> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**
A -
If you put ng-app inside the html tag, it allows the app to be implemented all over the page.
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
[x ] C: Two-way data-binding
[ ] D: Separation of concerns
```

## Question 6

What is an IIFE, and why might you use it?

IIFE stands for "Immediately Invoked Function Expression". If this function declared, it is immediately called. You would use an IIFE when you add a new module, because you want to protect the global scope.


> ...

## Question 7

What is the `ui-sref` directive, and how is it used?

'ui-sref' is like link_to in rails. It's a helper to add in the appropriate url for a previously defined state. By using it, you can change the router paths without having to go back into your html and fix all the paths.
> ...

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**
line 3. Under the "strict mode" i has to be defined(like var i = 1)

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
Comment
Attribute
Class
Elements

<div my-directive></div>
<div class="my-directive"></div>



```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**
B - Because it separates the files based on their models.

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
