function createServer() {
  var express = require('express')
  var app = express.createServer();

  //config
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/../app/views');

  //middleware
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.static(__dirname + '/../public'));
  app.configure('development', function() {
    app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
  });
  app.configure('production', function() {
    app.use(express.errorHandler());
  });

  return app;
}

exports.createServer = createServer;
