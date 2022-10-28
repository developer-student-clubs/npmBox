# Lodash

Lodash is a popular javascript based library which provides 200+ functions to facilitate web development. It provides helper functions like map, filter, invoke as well as function binding, javascript templating, deep equality checks, creating indexes and so on.

## Why Lodash?

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:
- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions

## Installation

- In the browser:
``` <script src="lodash.js"></script> ```

- Using npm:
``` npm i -g npm ```
``` npm i --save lodash ```

- In Node.js:

```JavaScript
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

## Module Formats
Lodash is available in a variety of builds & module formats.

- [lodash](https://www.npmjs.com/package/lodash) & [per method packages](https://lodash.com/per-method-packages)
- [lodash-es](https://www.npmjs.com/package/lodash-es), [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash), & [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)

## Complementary Tools
[futil-js](https://github.com/smartprocure/futil-js) is a set of functional utilities designed to complement lodash