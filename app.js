var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var app = require('connect')()
  .use(require('connect-livereload')({port: 35729}))
  .use(serveStatic('.tmp'))
  .use(serveStatic('app'))
  // paths to bower_components should be relative to the current file
  // e.g. in app/index.html you should use ../bower_components
  .use('/bower_components', serveStatic('bower_components'))
  .use(serveIndex('app'));

require('http').createServer(app)
  .listen( process.env.PORT || 9000)
  .on('listening', function() {
    console.log('Started connect web server on http://localhost:'+  (process.env.PORT || 9000));
  });
