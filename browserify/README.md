
# Browserify

## Introduction

   + Browserify is a tool for compiling node-flavored commonjs modules for the 
     browser.
   
   + Browserify lets you run CommonJS (Node) code in the browser.
   
   + Which reduces the drawback of switching contexts between browser and 
     server, and allows sharing of modules between the two.

   + Browserify follows the unix philosophy, and only does 1 thing: make your 
     JavaScript code run in the browser just like it would in Node.

## Installation

```
npm i browserify
```
## Workflows

### require
  
   + In node, there is a ```require()``` function for loading code from other        files.
   + If you install a module with npm:
```
npm install uniq
```
   + Then in a file ```nums.js``` we can ```require('uniq')``` :
```
var uniq = require('uniq');
var nums = [ 5, 2, 1, 3, 2, 5, 4, 2, 0, 1 ];
console.log(uniq(nums));
```
   + The output of this program when run with node is:
```
$ node nums.js
[ 0, 1, 2, 3, 4, 5 ]
```
   + You can require relative files by requiring a string that starts with a ```.```. For example, to load a file ```foo.js``` from main.js, in main.js you can do:
```
var foo = require('./foo.js');
console.log(foo(4));
```
   + If ```foo.js``` was in the parent directory, you could use ```../foo.js```      instead:
```
var foo = require('../foo.js');
console.log(foo(4));
```

or likewise for any other kind of relative path. Relative paths are always 
resolved with respect to the invoking file's location.

### exports

   + To export a single thing from a file so that other files may import it, assign over the value at ```module.exports```:
```
module.exports = function (n) {
    return n * 111
};
```
   + Now when some module ```main.js``` loads your ```foo.js```, the return 
     value of ```require('./foo.js')``` will be the exported function:
```
var foo = require('./foo.js');
console.log(foo(5));
```
   + This program will print:
```
555
```
   + You can export any kind of value with ```module.exports```, not just 
     functions.
  
### Bundling for the browser

   + To run a module in node, you've got to start from somewhere.

   + In node you pass a file to the ```node``` command to run a file:
```
$ node robot.js
beep boop
```
  
   + In browserify, you do this same thing, but instead of running the file, you generate a stream of concatenated javascript files on stdout that you can write to a file with the ```>``` operator:
```
$ browserify robot.js > bundle.js
```

   + Now ```bundle.js``` contains all the javascript that ```robot.js``` 
     needs to work. Just plop it into a single script tag in some html:
```
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

### How browserify works

   + Browserify starts at the entry point files that you give it and searches for any ```require()``` calls it finds using static analysis of the source code's abstract syntax tree.

   + For every ```require()``` call with a string in it, browserify resolves those module strings to file paths and then searches those file paths for ```require()``` calls recursively until the entire dependency graph is visited.

   + Each file is concatenated into a single javascript file with a minimal ```require()``` definition that maps the statically-resolved names to internal IDs.

   + This means that the bundle you generate is completely self-contained and has everything your application needs to work with a pretty negligible overhead.

   + Note: If your ```require()``` contains anything other than a string literal (i.e. a variable) then it cannot be read at time of bundling, so the module being required will not be concatenated into your bundle and likely cause a runtime error.

   + For more details about how browserify works, check out the compiler pipeline section of this document.

## More reference

   + [github repo](https://github.com/browserify/browserify-handbook#bundling-for-the-browser)

   + [link](https://yoshuawuyts.gitbooks.io/knowledge/content/js/browserify.html)

## Acknowledgement

```
GDSC , neer-patel-11 & R-Ayush777 , for creating the repo and issue.
```
