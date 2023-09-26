# magic-string

## what is magic-string?

* Suppose you have some source code. You want to make some light modifications to it replacing a few characters here and there, wrapping it with a header and footer, etc - and ideally you'd like to generate a source map at the end of it. 

## install

* We can install magic-string from [Magic-string](https://magic-string.umd.js.com)

## Feature Of Magic-String

- It's a small, fast utility for manipulating strings and generating sourcemaps.

- s.addSourcemapLocation( index )
Adds the specified character index (with respect to the original string) to sourcemap mappings, if hires is false (see below).

- s.append( content )
Appends the specified content to the end of the string. Returns this.

-s.replace( regexpOrString, substitution )
String replacement with RegExp or string. When using a RegExp, replacer function is also supported.

-s.trim([ charType ])
Trims content matching charType (defaults to \s, i.e. whitespace) from the start and end. Returns this.

- etc..

