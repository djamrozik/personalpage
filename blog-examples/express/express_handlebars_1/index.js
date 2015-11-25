
//index file with basic handlebars set up in express

var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

// use the '/views/layouts/main.handlebars' file as the default layout
app.engine('handlebars', handlebars({defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	//render the '/views/home.handlebars' file within the layout
	//pass in data for the current year
	res.render('home', {year: new Date().getFullYear()}); 
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})