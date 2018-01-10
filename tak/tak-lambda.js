let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
    s3.listObjects({
        'Bucket': 'apig-kine-proxy',
        'MaxKeys': 5,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
             Contents: [
                {
                   ETag: "\\"70ee1738b6b21e2c8a43f3a5ab0eee71\\"",
                   Key: "example1.jpg",
                   LastModified: <Date Representation>,
                   Owner: {
                      DisplayName: "myname",
                      ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                   },
                   Size: 11,
                   StorageClass: "STANDARD"
                },
                {...}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    sns.publish({
        Message: 'd',
        Subject: 'c',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:359675929438:a'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });
    sns.listSubscriptionsByTopic({
        TopicArn: 'arn:aws:sns:us-east-1:359675929438:a'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });
}