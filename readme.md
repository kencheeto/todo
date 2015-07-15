# todo

A brief exercise working off of this mock:

## usage

```
`bower install`
`open todo.html`
```

There's a `gulpfile` if you want to make changes. You'll want to `npm install; gulp` and Gulp will watch for any file changes.

## process

Some simple handwritten html, scss, and js to make this work.

I'm also using a few libraries:

* [Sortable](http://rubaxa.github.io/Sortable/) because I didn't want to work with drag events directly.
* jQuery to make the dom js a little more legible.
* normalize.css to keep things looking the same across browsers.

## notes

* No persistence. I figured there's more room for expression on the frontend.
* I have Gulp configured to do some basic js linting, sass processing, and es6 transpiling.
* There wasn't really enough code to warrant breaking out into separate files.
