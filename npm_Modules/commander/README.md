
# Commander

## Introduction

   + Commander is a lightweight nodejs module that provides powerful functions for user command line input and parameter parsing.

   + Gives user a facility to make their own custom CLI. 👷‍♂️

## Characteristics

   + Self recording code
   + Auto generate help
   + Merge short parameters
   + Default options
   + Mandatory options
   + Command parsing
   + Prompt

## Installation

   + ```npm install commander```

## Quick Start

   + We write code to describe our command line interface.

   + Commander looks after parsing the arguments into options and command-arguments, displays usage errors for problems, and implements a help system.

   + Commander is strict and displays an error for unrecognised options.

   + The two most used option types are a boolean option, and an option which takes its value from the following argument.

   + Example
```
const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();  
const options = program.opts();  
const limit = options.first ? 1 : undefined;  

console.log(program.args[0].split(options.separator, limit));
```

- Executing above code:
```
$ node split.js -s / --fits a/b/c
error: unknown option '--fits'
(Did you mean --first?)
$ node split.js -s / --first a/b/c
[ 'a' ]
```


## Declaring program variable:
   + Commander exports a global object which is convenient for quick programs. This is used in the examples in this README for brevity.

> // CommonJS (.cjs)
```
const { program } = require('commander');
```

   + For larger programs which may use commander in multiple ways, including unit testing, it is better to create a local Command object to use.

> CommonJS (.cjs)

```
const { Command } = require('commander');
const program = new Command();
```

> ECMAScript (.mjs)

```
import { Command } from 'commander';
const program = new Command();
```

> TypeScript (.ts)
```
import { Command } from 'commander';
const program = new Command();
```

## Making custom Command

   + Here we are going to make **Split** command with some options which
     works something like this->
```
$ node string-util.js help split
Usage: string-util split [options] <string>

Split a string into substrings and display as an array.

Arguments:
  string                  string to split

Options:
  --first                 display just the first substring
  -s, --separator <char>  separator character (default: ",")
  -h, --help              display help for command
$ node string-util.js split --separator=/ a/b/c
[ 'a', 'b', 'c' ]
More samples can be found in the examples directory.

```

   + Its source code is in Commander.js.

## More scope

   + This can create a global command which can work as we desire.

   + We can create a new command with new name which works same as a
     default command with simpler/more meaning full name.

## More Reference
   + [link](https://npm.io/package/commander)

## Acknowledgement

  + GDSC , neer-patel-11 & R-Ayush777 for creating this repo && issue.

