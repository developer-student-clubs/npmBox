var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');
 
var elem = document.getElementById('result');
var x = foo(100) + bar('baz');
elem.textContent = gamma(x);

module.exports = function (n) { return n * 111 }

// using the api directly for budo

var browserify = require('browserify');
var http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/bundle.js') {
        res.setHeader('content-type', 'application/javascript');
        var b = browserify(__dirname + '/main.js').bundle();
        b.on('error', console.error);
        b.pipe(res);
    }
    else res.writeHead(404, 'not found')
});

var through = require('through2');

module.exports = function (file) {
    return through(function (buf, enc, next) {
        this.push(buf.toString('utf8').replace(/\$CWD/g, process.cwd()));
        next();
    });
};

//RADHE RADHE RAM RAM
