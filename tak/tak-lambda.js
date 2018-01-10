let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'd',
        Subject: 'c',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:359675929438:tak'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });
}