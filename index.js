/* global __dirname */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//PRODUCTION 
//var server = app.listen(8000, '10.132.20.226', function(){
//var host = server.address().address;
//var port = server.address().port;
//console.log('Example app listening at http://%s:%s', host, port)
//});

//DEVELOPMENT
var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/client', express.static(__dirname + '/client'));
  
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});


