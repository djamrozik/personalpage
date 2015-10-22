
'use strict';

var express     = require('express');
var mongoose    = require('mongoose');

var local_codes = require('./local_codes');
var app         = express();

//environment defaults to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//static files
app.use(express.static('client')); 

//routes
require('./server/routes')(app);

/*
Config and settings file. Leave as last because this will actually 
start the server
*/
require('./server/config')(app);

