function createServer() {
  var express = require('express')
  var app = express.createServer();

  //config
  app.set("view engine", "jade");
  app.set("views", __dirname + "/views");

  //middleware
  app.use(express.logger());
  app.use(express.static(__dirname + "/../public"));
  app.use(express.bodyParser());
  app.configure('development', function() {
    app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
  });
  app.configure('production', function() {
    app.use(express.errorHandler());
  });

  return app;
}

exports.createServer = createServer;
