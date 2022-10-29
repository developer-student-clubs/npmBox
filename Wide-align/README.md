<h1 align="center"> wide-align module </h1>
<br/>

## Install

```console
$ npm install wide-align
```

## Import

```js
import align from 'wide-align';
```
## Description

- wide-align module

  → it is used to align the text

- alignment

  → alignment can be left, right, center <br/>
  → if we don't pass any alignment then it will take left alignment by default

- align function takes 2 arguments
  ```info
  1. width
  → width is the width of the text
  → if we don't pass any width then it will take the width of the text as a width
  → it can also take a number as a width
  → it will take that number as a width of the text
  → it is useful when we want to add some spaces after the text
  ```
  
  ```info
  2. string
  → string is the text which we want to align
  → it can also take a number as a string
  → it will take that number as a string
  → it is useful when we want to add some spaces before and after the text
  ```

- align function returns a string

  → so we can store it in a variable and then print it <br/>
  → it has three methods
  
    ```info
    1. left
    it is used to align the text to the left
    2. right
    it is used to align the text to the right
    3. center
    it is used to align the text to the center
    ```

## Example
```js
import align from 'wide-align';

let log = console.log;
let str = 'Hello World';

// left alignment
// total width of the text is 11
// so it will add 14 spaces after the text to make the total width 25
let leftAlignedText = '|'+ align.left(str, 25) +'|';
log(leftAlignedText);

// right alignment
// total width of the text is 11
// so it will add 14 spaces before the text to make the total width 25
let rightAlignedText = '|'+ align.right(str, 25) +'|';
log(rightAlignedText);

// center alignment
// total width of the text is 11
// so it will add 7 spaces before the text and 7 spaces after the text to make the total width 25
let centerAlignedText = '|'+ align.center(str, 25) +'|';
log(centerAlignedText);
```

### output
![image](https://user-images.githubusercontent.com/84856389/198826459-938df156-3d81-4776-a707-2864b2d095b5.png)
