
# Ramda

+ Ramda is general-purpose toolkit designed for the programmers who prefers
  functional programming style , functional programming is a programming
  paradigm where programs are constructed by applying and composing functions.

+ It makes creation of immutable functional pipelines easy.

# Unique features

1. Makes code look simple and elegant by providing immutable and side-effect
   free functions.

2. Ramda functions are automatically curried , allowing programmer to make new
   functions from old ones and making job easy.

# Installation

1. To use with **Node** :
   +  ``` $ npm install ramda ```
   +  Then in **console** :
   +  ``` const R = require('ramda'); ```

2. To use in **Deno** :
   + ``` import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts"; ```

3. To use in **Nest.land**:
   + ``` import * as R from "https://x.nest.land/ramda@0.27.2/mod.ts"; ```

4. To use directly in **Browser** :
   +  ``` <script src="path/to/yourCopyOf/ramda.js"></script> ```
   + minified version of above
   +  ``` <script src="path/to/yourCopyOf/ramda.min.js"></script> ```

## Using without installation

1. From **cdnjs** :
   + ```   <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>  ```

2. From **jsDelivr** :
   + ``` <script src="//cdn.jsdelivr.net/npm/ramda@0.25.0/dist/ramda.min.js"></script>```

   + ``` <script src="//cdn.jsdelivr.net/npm/ramda@0.25/dist/ramda.min.js"></script> ```

   + ``` <script src="//cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js"></script>```

# Naming history

        " Ok, so we like sheep. That's all. It's a short name, not already taken.
          It could as easily have been eweda, but then we would be forced to say
          eweda lamb!, and no one wants that. For non-English speakers, lambs are
          baby sheep, ewes are female sheep, and rams are male sheep. So perhaps
          ramda is a grown-up lambda... but probably not. " ~ creator

# Checking performance -> Testing

## What is a Test Suite?

   + It is a contianer with set of tests helping testers executing and
     reporting the performances.
   + Test suites are created based on the cycle or scope of program with
     multiple test cases.
   + Any test takes state from one of these: `Active` , `Inprogress` & `Completed`.

## Testing

### On Console:

   + To run the test suite from the console, have mocha needs to be installed:
     ``` npm install -g mocha ```
   + Then from the root of the project, you can just call
     ``` mocha ```
   + Alternately, if you've installed the dependencies, via:
     ``` npm install ```
     then you can run the tests (and get detailed output) by running:
     ``` npm test ```
### On Browser
   + You can use **testem** to test across different browsers (or even
     headlessly), with livereloading of tests.
   + Install testem ```(npm install -g testem)``` and run testem. Open the link      provided in your browser and you will see the results in your terminal.
   + If you have ```PhantomJS installed```, you can ```run testem -l phantomjs```  to run the tests completely headlessly.
# Usage
   + For v0.25 and up, import the whole library or pick ES modules directly from the library:
    import * as R from 'ramda'
  
    const {identity} = R
    R.map(identity, [1, 2, 3])
   + Destructuring imports from ramda does not necessarily prevent importing the entire library. You can manually cherry-pick methods like the following,
     which would only grab the parts necessary for identity to work
     ```import identity from 'ramda/src/identity' identity()```
   + Manually cherry picking methods is cumbersome, however. Most bundlers like      Webpack and Rollup offer tree-shaking as a way to drop unused Ramda code
     and reduce bundle size, but their performance varies, discussed here.
   + Here is a summary of the optimal setup based on what technology you are
     using:
     |  Technology  |    Use    |  Discussion Link  |  Examples Link  |
     | ------------ | --------- | ----------------- | --------------- |
     | Webpack | Uglifyjs with ModuleConcatenation | [link](https://github.com/ramda/ramda/issues/2355) | [link](https://github.com/scabbiaza/ramda-webpack-tree-shaking-examples/blob/master/06-webpack-scope-hoisted/webpack.config.js) |
     | Webpack + Babel  | babel-plugin-ramda  | [link](https://www.andrewsouthpaw.com/ramda-webpack-and-tree-shaking/)  | [link](https://github.com/AndrewSouthpaw/ramda-webpack-tree-shaking-examples/blob/master/07-webpack-babel-plugin-ramda/package.json) |
     | Rollup | nothing extra needed | [link](https://github.com/scabbiaza/ramda-webpack-tree-shaking-examples/blob/master/07-rollup-ramda-tree-shaking/rollup.config.js) | [link](https://github.com/scabbiaza/ramda-webpack-tree-shaking-examples/blob/master/07-rollup-ramda-tree-shaking/rollup.config.js) |
# Typings
   + [TypeScript](https://www.npmjs.com/package/@types/ramda)
   + [Flow](https://github.com/flowtype/flow-typed/tree/master/definitions/npm/ramda_v0.x.x)
# Acknowledgements
   + ` GDSC and Neer Patel` for creating this issue.
# More references
1. [**Introducing Ramda**](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda) `by Buzz de Cafe`
2. [**Why Ramda?**](http://fr.umio.us/why-ramda/) `by Scott Sauyet`
3. [**Favoring Curry**](http://fr.umio.us/favoring-curry/) `by Scott Sauyet`
4. [**Why Curry Helps**](https://hughfdjackson.com/javascript/why-curry-helps/) `by Hugh Jackson`
5. [**Hey Underscore, You're Doing It Wrong!**](https://www.youtube.com/watch?v=m3svKOdZijA&app=desktop) `by Brian Lonsdorf`
6. [**Thinking in Ramda**](https://randycoulman.com/blog/categories/thinking-in-ramda) `by Randy Coulman`
