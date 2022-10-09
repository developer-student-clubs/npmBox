# UID

## What is UID ?
* UID is a small and fast node.js module which generates randomized output string using lowercase alphanumeric characters.


## Install:
* We can install uid from terminal using the command `npm install uid` or,
* We can install `uid` from [npm](https://www.npmjs.com/package/uid)

## Feature of Uid:-
* `uid` and `uid/secure` are faster than its alternatives.
* Instead of using single characters, it creates an output using hexadecimal pairs (from a cached dictionary).
* It allocates a large Buffer/ArrayBuffer up front and uses small chunks from that as needed.
* You can see all the example of each and every feature in the sample code of uid.
* uid offers following 3 modes for generating randomized ids

1. **uid**\
The *"non-secure"* mode which is default mode and uses Math.random to produce UUIDs. 

1. **uid/secure**\
The *"secure"* mode uses current environment's inbuilt crypto module to generate cryptographically secure (CSPRNG) UUIDs.

1. **uid/single**\
The *"single"* mode does not maintain internal cache or buffer which is ideal for short-lived environments.

*   For more information visit [uid documentation](https://github.com/lukeed/uid)
