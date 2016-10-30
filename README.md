# Week 08

## Instructions

1. Fork this repo
- Clone your fork
- Fill in your answers by writing the appropriate area, or placing an 'x' in the square brackets for multiple-choice questions
- Add/Commit/Push your changes to Github
- Open a pull request

## Part I: Angular

### Question 1

Instantiate a new Angular module called `blog` that takes `ui.router` as a dependency.

```js
// Your answer goes here...
```

### Question 2

One button below has an `ng-click` attribute; the other has `data-ng-click` instead. What difference does it make?

```html
<button ng-click="create()">Click</button>
<button data-ng-click="create()">Click</button>
```

```text
Your answer goes here...
```

### Question 3

Which of the following demonstrates the best usage of `ng-app`? **Explain your answer.**

```text
Your answer goes here...
```

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

### Question 4

Imagine an app in which a change to the view updates the model without a page refresh, and a change to the model updates the view without a page refresh.

Which one of the following concepts does this best illustrate?

```
[ ] A: Modularity
[ ] B: MVC
[ ] C: Two-way data-binding
[ ] D: Separation of concerns
```

### Question 5

What is the `ui-sref` directive, and how is it used?

```text
Your answer goes here...
```

## Part II: APIs

### Question 1

Below is an `index` controller action that maps to a `Post` model in a Rails application. How would you modify it so that it can respond with a list of posts in either HTML or JSON form, depending on the incoming HTTP request?

```rb
class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
end
```

```rb
# Your answer goes here...
```

### Question 2

Let's say the posts in the previous question are available when you visit `http://localhost:3000`. How could you do the following using jQuery...
  1. Retrieve all the posts in JSON form
  2. If Step 1 is successful, print the resulting JSON to the console
  3. If Step 1 is unsuccessful, print an error message to the console

```js
// Your answer goes here...
```
