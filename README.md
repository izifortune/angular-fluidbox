angular-fluidbox
================

Angular directive wrapping [fluidbox](https://github.com/terrymun/Fluidbox) library.

How to use it:

`npm install --save angular-fluidbox`

or

`bower install --save angular-fluidbox`

Make sure that jquery and fluidbox are pulled as dependencies.

Then you need to include the module `fluidbox` inside your module declaration.
Eg:

```
angular.module('app', ['fluidbox']);
```

Last step is to use the directive this way

```
<a href="http://placehold.it/600x600" fluidbox>
  <img src="http://placehold.it/200x200">
</a>
```


##TODO

* Service for closing, opening etc fluidbox instances
* Options observe?
* Events broadcast?
