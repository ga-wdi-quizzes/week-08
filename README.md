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
    'ui.router'
  ])
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

> They will do the same thing. However, in an html validator, the validator will ignore the data-ng-click, and will throw an error on ng-click.  

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

> I've never seen it on the head, and I would think that would be a bad idea, as now you scope is only the head tag. So, no to B.
Mostly we have used ng-app in the html tag. It is the recommended location by docs.angularjs.org/guide and from what we have learn does well for small apps. So I would go with A.
While I do stand by using choice A as best usage of ng-app, there are times when using choice C in a div would be helpful, as it would make the scope smaller and from what I have read, it could separate code by using a div as a wrapper. I would not use C's exact code as I think using data-ui-sref before ng-app would break things.


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

> IIFE stand for immediately-invoked function expression. It is used when trying to avoid polluting the global namespace because global variables are bad.

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> the s in ui-sref stands for state, so this is a directive that binds a link to a state. We have used it in the a tag to link a state to text so that when you click on a link it goes to that defined state (as opposed to a full webpage with a full page refresh. )

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> A little confused. My first instinct would say line 1 because "use strict" has always thrown an error via jshint. But I think because of "use strict", most of the other lines will through an error. line 3 does not define i, lines 4-6 use == instead of ===, and I am surprised 4-6 don't need {} after if, else if, and else.
But jshint aside I would say line 3 because i does not have var in front of it.

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
<my-directive></my-directive>
<h3 my-directive></h3>
```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> I choose B. For every controller there is a view which can be seen in B. B also allows things to be seen in alphabetical order. Lastly it divided everything by concerns of model, so you can see everything that involves artists in one folder and everything that involves songs in another.
If none of this is convincing, than I would choose B purely because visually it looks better organized.


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
