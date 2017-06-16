
var express     = require('express');
var bodyParser  = require('body-parser');

var local_codes = require('../local_codes');

module.exports = function(app) {

	var env = app.get('env');

	//middleware
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	var port;
	var ip;

	// set the networking values
	if (env === 'production') {
		port = local_codes.port;
		ip = local_codes.internal_ip;
	} else  {
		port = 8000;
		ip = 'localhost';
	}

	var server = app.listen(port, ip, function () {
		var host = server.address().address;
		var port = server.address().port;
		console.log('personalpage listening at http://%s:%s', host, port);
	});

	/* CLOSE EXPRESS */

	var sockets = [];

	server.on('connection', function(socket){
		sockets.push(socket);
	});

	var shutDownApp = function() {
		sockets.forEach(function(socket) {
			socket.destroy();
		});
		server.close(function(){
			console.log("Express connection closed");
			process.exit();
		});
		setTimeout( function () {
			console.error("Could not close connections in time, forcefully shutting down");
			process.exit(1);
		}, 20*1000);
	};

	process.stdin.resume(); //so program doesn't close instantly

	process.on('SIGINT', shutDownApp);
	process.on('exit', shutDownApp);
	process.on('uncaughtException', function(err){
		console.log(err);
		console.log("Node caught an exception, not shutting down");
	});

};
