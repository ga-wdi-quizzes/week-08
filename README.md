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

> The first one would not validate in the HTML validator whereas the second one does validate in HTML validator. The function of both buttons is the same.

 ## Question 4

 Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

 **Your answer:**


> The first one has the best usage of "ng-app". The "ng-app" should be attached to the html element of the html document.

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


> IIFE stands for "immediately invoked function expression". Variables in an iife are called only once, and do not exist outside of the function. IIFE's help keep the global scope lean and easier to manage/ understand.

 ## Question 7

 What is the `ui-sref` directive, and how is it used?

 **Your answer:**


> The ui-sref directive links different states of a web application in angular, the s stands for states. The directives changes which views you are seeing in an app (new, show, index, etc.)

 ## Question 8

 One of the lines of code in the following snippet will throw an error. Which one is it, and why?

 **Your answer:**


> line 3 throws an error. when you use "use strict" at the beginning, each variable must be clearly defined with var because the variables will not exist otherwise. Therefore, line 3 will throw an error because the variable 'i' is not defined with var, whereas the variable 'max' is labeled 'var max= 100'

 ```js
 /*1*/ "use strict";
/*2*/ var max = 100;
/*3*/ for(i = 1; i < max; i){
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
<div data-my-directive></div>

<my-directive></my-directive>
 ```

 ## Question 10

Of the three following options, which is the most "correct" way of organizing the files that make up an Angular app? Why is this option considered "better" than the other two?

 **Your answer:**

> B is the best way of organizing an angular application. Angular applications require many files, and B is organized in an easy to read an use way-- all the files necessary for artists are together (html, controller,  js, etc. ) all the necessary files for songs are together, too. Options A and C are not as easy to navigate. For instance, A does not have separate folders for artists and songs. Both A and C are just more confusing and messy.

 ### A:
 ```
@@ -192,24 200,23 @@
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
