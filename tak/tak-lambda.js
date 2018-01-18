let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	console.log(JSON.stringify(event));
	callback(null,'Successfully executed');
}