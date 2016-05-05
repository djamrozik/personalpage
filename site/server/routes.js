
/* global process */
/* global __dirname */

var path = require('path');

var blog_data = require('../views/blog_data');

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

	// get a blog, send back correct one, templatized with express-handlebars
	app.get('/blog/:id', function(req, res) {

		var blog_id = req.params.id;

		// obtain the correct data for this blog id. This also makes sure it exists
		var blog_params = blog_data.blog_data[blog_id];

		// check to make sure we matched with the data
		if (!blog_params) {
			res.send('Page not found. TODO: send to 404');
			return;
		}

		res.render(blog_id, blog_params);
	});

	//API ROUTES//

	//contact - static html page
	app.post('/api/message', MessageController.sendMessage);
};