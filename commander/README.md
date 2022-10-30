Commander looks after parsing the arguments into options and command-arguments, displays usage errors for problems, and implements a help system.

Commander is strict and displays an error for unrecognised options. The two most used option types are a boolean option, and an option which takes its value from the following argument.

Installation:
npm install commander

Declaring program variable:
Commander exports a global object which is convenient for quick programs. This is used in the examples in this README for brevity.

// CommonJS (.cjs)
const { program } = require('commander');
For larger programs which may use commander in multiple ways, including unit testing, it is better to create a local Command object to use.

// CommonJS (.cjs)
const { Command } = require('commander');
const program = new Command();
// ECMAScript (.mjs)
import { Command } from 'commander';
const program = new Command();
// TypeScript (.ts)
import { Command } from 'commander';
const program = new Command();