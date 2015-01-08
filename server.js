var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var handlers = require('./requestHandlers');

var app = express();

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//Set Environment
app.set('env', process.env.NODE_ENV || 'development');

if (app.get('env') === 'development') {
  app.set('ip', 'localhost');
  app.set('port', 3000);
  mongoose.connect('mongodb://localhost/freemydiary-dev');
}

if (app.get('env') === 'production') {
  app.set('ip', process.env.IP);
  app.set('port', process.env.PORT);
  mongoose.connect(process.env.MONGOLAB_URI);
}

//API Route Handling
app.get('/api/userCheck/:username', handlers.userCheck);
app.get('/api/fetchData/:username', handlers.fetchData);

//Start Server
app.listen(
  app.get('port'),
  app.get('ip'),
  function(){
    console.log('Express server listening on port %d, in %s mode', app.get('port'), app.set('env'));
  }
);
