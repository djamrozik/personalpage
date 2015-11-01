
/* global process */
/* global __dirname */

var path = require('path');

var MessageController = require('./controllers/MessageController');

module.exports = function(app){

	//STATIC ROUTES//
	
	//homepage static html page
	app.get('/', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/index.html'));
	});

	//contact - static html page
	app.get('/contact', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/contact.html'));
	});
	
	//mergely sandbox static html page
	app.get('/mergely_sandbox', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/mergely-sandbox.html'));
	});

	//API ROUTES//

	//contact - static html page
	app.post('/api/message', MessageController.sendMessage);
};