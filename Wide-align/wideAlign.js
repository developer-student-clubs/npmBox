// importing align module from wide-align
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
