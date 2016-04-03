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
}())

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

```text
I had trouble with #2.
```

## Question 3

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

**Your answer:**

> The `data-ng-click` enables the HTML to properly validate. The `data` tells the validator that `ng-click` is not a typical HTML tag and can be ignored.

## Question 4

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

**Your answer:**

> *A* demonstrates the best usage of `ng-app` because it allows directives to be properly used within the HTML. It is declared on the outer <html> wrapper, so ng directives can be used anywhere inside the <html> opening and closing tags. Option B would not work because directives could only be used in the head tag, and C is incorrect because the `ng-app` is called 1) after the `data-ui-sref` and 2) in a div that is not wrapped around the `data-ui-sref`, both making `data-ui-sref` invalid.

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

> IIFE stands for `Immediately Invoked Function Expression`, meaning that after the function is declared, it is immediately called. It is also used to protect the global scope from getting polluted with global variables and to protect the variables that are within the IIFE from being used in other functions outside of the IIFE.

## Question 7

What is the `ui-sref` directive, and how is it used?

**Your answer:**

> `ui-sref` is a drective that binds a link to a declared state. For example, say you declared a `.state("songIndex", { url: "/songs"})` in your router. Rather than hard coding the link to /songs in your <a> tags, you can write `<a data-ui-sref="songIndex">Songs</a>` and it will bring you to the songs index page. This allows for dynamic updates in your views should you want to edit your songIndex url in the future.

## Question 8

One of the lines of code in the following snippet will throw an error. Which one is it, and why?

**Your answer:**

> Line 2: var max = 100 will cause an error because it is a global variable in strict mode. If the line "use strict" was omitted, the global variable would not throw an error.

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
<!--my-directive-->
<div my-directive></div>
<div class="my-directive"></div>
<my-directive></my-directive>
```

## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

**Your answer:**

> B is the most correct way of organizing the files because it separates the files based on their corresponding model (songs and artists). So all of the controllers, views, and directives for songs is in the songs folder and of the controllers, views, and directives for artists is in the artists folder. With option A, it could be easy to accidentally be in a view for artists rather than a view for songs because they are in the same folder. Option C would make linking the files to one another more difficult since corresponding files are in separate folders.


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
