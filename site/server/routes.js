
var path = require('path');

var blog_data = require('./blog_data');
var photography_data = require('./photography_data');
var MessageController = require('./controllers/MessageController');

module.exports = function(app){

	// homepage static html page
	app.get('/', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../client/app/views/index.html'));
	});
	
	// mergely sandbox static html page
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
		res.render('blogs/' + blog_id, blog_params);
	});

	// the blog homepage, shows a list of blogs based off of the data file
	app.get('/blog', function(req, res){
		var blogs = {
			title: 'Blogs List - Dan Jamrozik',
			layout: 'blank_content'
		};
		blogs.blogs = blog_data.blog_data;
		res.render('blog_main', blogs);
	});

	// extras, send the jquery foursquare plugin
	app.get('/extras/jquery_dynamic_foursquare_plugin', function(req, res) {
		var params = {
			title: 'jquery foursquare image slider',
			layout: 'blank_content'
		};
		res.render('jquery_dynamic_foursquare_images', params);
	});

	// the photography homepage, load all the photos I can here
	app.get('/photography', function(req, res){
		var params = {
			title: 'Photography - Dan Jamrozik',
			layout: 'blank_content_full'
		};
		params.photoAlbums = photography_data.photography_data;
		res.render('photography_main', params);
	});

	//API ROUTES//

	//contact - static html page
	app.post('/api/message', MessageController.sendMessage);
};