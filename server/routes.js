
/* global process */
/* global __dirname */

var path = require('path');

module.exports = function(app){
	
	//homepage static html page
	app.get('/', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/index.html'));
	});
	
	//mergely sandbox static html page
	app.get('/mergely_sandbox', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/mergely-sandbox.html'));
	});
};