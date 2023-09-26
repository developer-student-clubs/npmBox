//require url module
var url = require('url');
//Parsed URL objects have some or all of the following fields, depending on whether or not they exist in the URL string. Any parts that are not in the URL string will not be in the parsed object.
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

//creating and initializing urlObject
var urlObject = {
    protocol : 'http',
    host : 'localhost:8080',
    pathname : 'default.htm',
    query : { 
        year : '2017',
        month : 'february'
    },
    hash : 'first'
}

//getting the derived URL from urlObject using the url.format function and display it
console.log(url.format(urlObject));
//http://localhost:8080/default.htm?year=2017&month=february#first

// Parsing of Target URL:

// 1. Preceded by forward slash(“/”) – It will replace whole path after domain of base URL.
// 2. Not preceded by forward slash(“/”) – It will replace last word after forward slash(“/”) in path of base URL

//Method 1:
console.log(url.resolve("http://www.google.com/", "/one"));
console.log(url.resolve("http://www.google.com/one/two/three", "/four"));
// http://www.google.com/one
// http://www.google.com/four

//Method 2:
console.log(url.resolve("http://www.google.com/", "one"));
console.log(url.resolve("http://www.google.com/one/two/three", "four"));
// http://www.google.com/one
// http://www.google.com/one/two/four
