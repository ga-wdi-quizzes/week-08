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
(function(){
    "use strict";

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

**prefixing the attribute with "data-" is just a hack to make it validate in HTML validators:**

> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your Answer:**

> Where you link ng-app can vary based on what you're trying to do.

In this case, A. because neither B. or C. will allow ui-sref to link correctly
in the h1 tag. ng-app must be linked in an anscestor for its bindings to be
available.

In B., ng-app is being linked in the head, which is a sibling of the body
element (where ui-sref is being linked in a descendant).

In C., ng-app is being linked in a following sibling element of h1 (which is
a parent of where ui-sref is being linked).


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

> An IIFE stands for Immediately Invoked Function Expression.  It runs
immediately after its definition is evaluated.  In angular, and other
JavaScript applications, it's typically used to wrap all code in order to
protect the global scope.

Everything inside the function is isolated, and has its own `this` so nothing
can conflict with window or document.  Also, global objects like window, document
or JQuery can be passed into the IFFE as arguments to speed up lookups when
accessing those elements, and allow for the access of those global objects to
be minified.


## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> It is an attribute of ui-router used in the a tag that allows linking to
outside pages from within an angular app.

e.g.  <a ui-sref="{{itemShowVM.url}}">Item</a>

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> line 3 because in strict mode every variable must be intialized with the word
"var" prefixing it.  Here, "i" is initialized in the loop definition without
"var".

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
(function(){
    "use strict";

    angular
        .directive("my-directive", [
            myDirectiveFunc
        ]);

    function myDirectiveFunc(){
        return {
            scope: {
                dataObject: '=', // two way object binding
                stringParam: '@' // one way string binding
            }
        };
    }
})();

```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> B. because it's easier to navigate between files if they are more intuitively grouped.


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

