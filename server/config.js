
var local_codes = require('../local_codes');

module.exports = function(app) {

	var env = app.get('env');

	if (env === 'production') {
		
		var server = app.listen(local_codes.port, local_codes.internal_ip, function(){
			var host = server.address().address;
			var port = server.address().port;
			console.log('personalpage listening at http://%s:%s', host, port);
		});
	} 

	if (env === 'development') {

		var server = app.listen(8888, function () {
		  var host = server.address().address;
		  var port = server.address().port;
		  console.log('personalpage listening at http://%s:%s', host, port);
		});
	}

	//don't stop the node process on an exception
	process.on('uncaughtException', function (err) {
	  console.error(err);
	  console.log("Node NOT Exiting...");
	});

}