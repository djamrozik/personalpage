
var express     = require('express');
var bodyParser  = require('body-parser');

var local_codes = require('../local_codes');

module.exports = function(app) {

	var env = app.get('env');

	//middleware
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	//run the app (depending on dev or production)
	if (env === 'production') {
		
		var serverProduction = app.listen(local_codes.port, local_codes.internal_ip, function(){
			var host = serverProduction.address().address;
			var port = serverProduction.address().port;
			console.log('personalpage listening at http://%s:%s', host, port);
		});
	} else  {

		var serverDevelopment = app.listen(3030, function () {
		    var host = serverDevelopment.address().address;
		    var port = serverDevelopment.address().port;
		    console.log('personalpage listening at http://%s:%s', host, port);
		});
		
	}

	//don't stop the node process on an exception
	process.on('uncaughtException', function (err) {
	  console.error(err);
	  console.log("Node NOT Exiting...");
	});

};