# ora

## What is ora
Ora is simple loading spinner in npm. When you want to communicate to the user that she needs to wait you can use ora.

## Installation
We can install ora package by using below command.
<pre> npm install ora </pre>

## API
- ora(text)
- ora(options) </br>
  options
  - text
  - prefixText
  - spinner
  - color
  - hideCursor
  - indent
  - interval
  - stream
  - isEnabled
  - isSilent
  - discardStdin
 
 ## Usage
 <pre>
 const ora = require('ora-classic');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
</pre>
