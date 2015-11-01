
var nodemailer  = require('nodemailer');

var local_codes = require('../../local_codes');

module.exports.sendMessage = function(req, res){

	//info for nodemailer
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: local_codes.a,
	    pass: local_codes.b
	  }
	});
	var mailOptions = {
	  to: 'djamrozik96@gmail.com',
	  subject: req.body.topic + ' - ' + req.body.email,
	  text: req.body.message + '\n\n' + req.body.email
	};

	//send the email
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			res.status(500).send('Error sending email');
			console.log('Error sending email ' + error);
		} else {
			res.json(res.body); //send something back
		}
	});
	
};