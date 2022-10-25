const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
debug('booting %o', name);
http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});