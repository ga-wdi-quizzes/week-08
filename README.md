# Week 08

## Instructions

1. Fork this repo.
- Clone your fork.
- Fill in your answers by writing the appropriate area, or placing an 'x' in the square brackets for multiple-choice questions.
- Add/Commit/Push your changes to Github.
- Open a pull request.

## Question 1

Instantiate a new Angular module called `BlogPost` that takes `ui.router` as a dependency. Use Angular code style conventions.


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
[? ] A: <button data-ng-if="status">Click</button>
[?] B: <button data-ng-show="status">Click</button>
[ ] C: <button data-ng-hide="status">Click</button>
[X] D: <button>{{status}}</button>
```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

They are basically the same. The only difference is that data-ng-click will pass as a valid attribute in html5 if you pass it through html validator.
> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

I think that Option A demonstrates the best usage of `ng-app` bc it will be that one app throughout the whole website.

Angular is aware that there is an module but it is not used anywhere or turned on. By requiring the module in the html tag, the module loads as soon as it's able to. The html tag it is the faster than the head & div.
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

IIFR, Immediately-invoked function expression. These are the items we put in right away, under & after "use strict". It is=

(function(){

})();
}


This is not necessary but it is just an angular convention that immediately calls the function and is used to keep your app from having a lot of global variables.
> ...

## Question 7

What is the `ui-sref` directive, and how is it used?

sref stands for state. When using "ui-sref", it checks to see if the state exists. If it does exists, it will return the url for it. If you have specific parameters, supply the value for it and it will return the correct url.

> ...

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

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


```html
M- comMent
A- attribute
C- class
E- element

examples:
<div class='my-directive'></div>

<my-directive></my-directive>

<div my-custom-directive></div>
```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

According to John Papa, the `Folders-by-Feature` structure is the best method for organizing your angular app. This structure is suppose to make it easier for a developer to locate code & identify what each file represents. This structure is flat and helps reduce repetitive and redundant file names.  

Based on John's styleguide, option A would be best. It is folders are assigned by controllers, directives and then views. 

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
