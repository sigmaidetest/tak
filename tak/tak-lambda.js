let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/359675929438/sqssa',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});


	callback(null, 'Successfully executed');
}