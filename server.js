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
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  mongoose.connect('mongodb://localhost/freemydiary-dev'); 
}

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGOLAB_URI);
}

//API Route Handling
app.get('/api/userCheck', handlers.userCheck);
app.get('/api/fetchData', handlers.fetchData);

//Start Server
app.listen(process.env.PORT || 3000);
