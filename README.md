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
"use strict";

(function(){
  angular
  .module("BlogPost", [
    "ui.router",
    "posts",
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
[ ] C: <button data-ng-hide="status">Click</button>
[ x] D: <button>{{status}}</button>

```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

No difference, data- will allow html to validate

> ...

## Question 4

Which of the following demonstrates the best usage of `ng-app`?

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

Having ng-app in the html allows you to change the title of the page, supposedly having ng-app in body makes it slightly faster. but there is no real wrong of having it in html or body.

putting it in head only changes the head.. so thats wrong and in the div is wrong too, that is where a view should be (sref)

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
standas for immediately invoked function expression, its good practice to use it because in very large scale projects, we do not want to pollute the name space in all of our controllers, meaning that there will be no naming conflicts in all the controllers and each controller has its own set of variables.
> ...

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**
this is used to render a view
> ...

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**
Because we are of 'use strict' i=1 will cause an error because it is not defined.
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

my-directives are 'rules' for whats inside our ng-app. we can also use them to repeat and make small fast changes to the repeating information once instead of for every single div.

<div ng-app="myApp" ng-controller="myController">
  <div ng-repeat="stuff in stuffs">
<my-directive title = "{{stuff}}">
  Stuff name is :
</my-directive>
</div>
</div>

not sure about another example..

```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**
I like option B. I think its easier to see the organization and how the URL is going to look, it makes more sense.
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
