var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');
 
var elem = document.getElementById('result');
var x = foo(100) + bar('baz');
elem.textContent = gamma(x);

module.exports = function (n) { return n * 111 }