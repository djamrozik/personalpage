
'use strict';

var express     = require('express');

var local_codes = require('./local_codes');
var app         = express();

//environment defaults to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//static files
app.use(express.static('client')); 

//Config and settings file. Should be before the routes
require('./server/config')(app);

//routes
require('./server/routes')(app);


