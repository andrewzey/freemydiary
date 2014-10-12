var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var handlers = require('./requestHandlers');

var app = express();

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
app.post('/api/userCheck', handlers.userCheck);

app.listen(process.env.PORT || 3000);
