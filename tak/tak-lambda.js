let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	callback(null, 'Successfully executed');
	sns.publish({
		Message: 'faf',
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
	sns.publish({
		Message: 'fadsfasf',
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
	ddb.get({
		TableName: 'csv',
		Key: { 'id': a, 'name': 'b' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	ddb.get({
		TableName: 'csv',
		Key: { 'id': k, 'name': 'r' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
}