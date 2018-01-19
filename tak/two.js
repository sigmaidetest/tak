let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'csv',
		Key: { 'id': nat, 'name': 'n' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	sns.publish({
		Message: 'fafa',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:359675929438:faf'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}