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
    .module( "BlogPost", [
      "ui.router"
    ]);
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
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

**Your answer:**

> Prepending `data` to the `ng-click` directive will ensure that the HTML will still validate, despite the fact that a non-standard HTML attribute is included within the tag (namely the Angular directive, `ng-click`). Both buttons will function in exactly the same way, but only the second one will validate.

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

> "A" demonstrates the best usage of `ng-app` because the `<html>` element constitutes the most logical root element for the Angular app, `myapp`. The `<head>` tag includes a `<title>` title tag indicating that the entire HTML page is part of `myapp`, meaning that the `ng-app` directive should not be on the `<body>` tag, for example. The problem with "B" is the fact that the root element is the `<head>` tag; thus, the `ng-sref` attribute on the `<h1>` tag in the body of the document will not be recognized as part of the Angular app. In "C", the Angular app only exists within the `div` that is a child of the `<body>` tag. As is the case in "B," the `ng-sref` attribute on the `<h1>` tag will not be recognized as part of `myapp`. Anything that is part of the Angular app needs to be a child of the root element of that app.

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

> In JavaScript, an IIFE is an "immediately-invoked function expression." The purpose of such a function expression is to protect the global scope against variables that are declared within the function. In his authoritative style guide for Angular 1, John Papa explains the reasoning behind this practice as follows: "An IIFE removes variables from the global scope. This helps prevent variables and function declarations from living longer than expected in the global scope, which also helps avoid variable collisions. When your code is minified and bundled into a single file for deployment to a production server, you could have collisions of variables and many global variables. An IIFE protects you against both of these by providing variable scope for each file."

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> The `ui-sref` directive comes from Angular UI-Router, which is a client-side, single-page app routing framework that updates the browser's URL as the user navigates through the app. The `ui-sref` directive is like a link helper method in Ruby on Rails in that it replaces the typical `href` attribute of an `<a>` tag. In this case, the "s" in `sref` refers to a "state" within the app, rather than a different page. The app can include multiple locations (e.g., an index state, a show state, etc.) without requiring a page refresh; thus, the user can see the URL change as he or she navigates through the application, even though he or she is never actually visiting another page. In order to use `ui-sref`, you must include UI-Router as a dependency when you instantiate your main AngularJS module (i.e., the Angular app). The `sref` directive itself checks whether or not a state exists, and if it does, it returns the URL for it. If that URL has parameters, you can supply a value for that parameter and it will add it into the appropriate place in the URL.

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> Line 3 will throw an error indicating that the variable `i` is undefined. In order to correct this issue, you would need to edit line 3 as follows: ` for(var i = 1; i < max; i++){ `. Line 3 throws an error because `"use strict";` is on line 1, which means that strict mode is in effect. In strict mode, you cannot define a global variable (in this example, `i`); instead, you must use the `var` keyword and define a local variable.

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

<!-- Option 1 --> <my-directive></my-directive>
<!-- Option 2 --> <div data-my-directive></div>

<!-- The custom directive could also be embedded in HTML using a comment, or it could be embedded as the value of the class attribute on another tag. -->

```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> Option "B" is the most correct way to organize the files in an Angular app. Each view in an Angular app has its own controller, so the prescribed practice is to keep the `.js` and `.html` files for each view next to each other alphabetically in the file structure (all the "index" files should be next to each other). The files in an Angular app should be separated by model (an Angular module), which is how it is done in option "B." Option "A" separates the files into views, directives, and controllers, and option "C" seems to separate the the files into HTML and JavaScript directories. Again, the goal is to have everything for your `artists` module (views, controllers, partials, and custom directives) in one directory and everything for the `songs` module in another.


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
