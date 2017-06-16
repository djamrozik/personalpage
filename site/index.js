
'use strict';

var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

//environment defaults to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//static files
app.use(express.static('client'));

// handlebars engine
app.engine('handlebars', handlebars({defaultLayout: 'main_blog'}) );
app.set('view engine', 'handlebars');

//Config and settings file. Should be before the routes
require('./server/config')(app);

//routes
require('./server/routes')(app);
