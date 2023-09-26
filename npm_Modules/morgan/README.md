# Morgan 

## What is morgan ?
* morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process.
* In Node.js and Express, middleware is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server.
## What can morgan do for you?
* It provides flexibility in defining the format of log messages.
* It allows you to overwrite the output destination for your logs
## When would you need it?
* As you’ll see in a second if you’re working with Express or a similar framework (such as restify) you’ll have the need to log incoming information about the requests, this framework was designed specifically for that, just keep reading.

## Getting Started with  Morgan npm

* In order to install Morgan, just type in your terminal window:
* npm install morgan --save

## Predefined log formats:
* In app.js thers is Predefined log format called 'tiny'.  Others are,

* "combine": which gives you the Apache standard combined format for your logs.

* "common": referencing the Apache standard common format.

* "dev": A color-coded (by request status) log format.

* "short": Shorter than the default format, including just the few items you’d expect a request logline would have.

* "tiny": Even shorter, just the response time and a few extra items.

## Use morgan 
* To use morgan in your Express server, you can invoke an instance and pass as an argument in the .use() middleware before your HTTP requests.
* The preset tiny provides the minimal output when logging HTTP requests. 
* Including the preset tiny as an argument to morgan() will use its built-in method, identify the URL, declare a status, and the request's response time in milliseconds.
