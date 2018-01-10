let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
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
    ddb.put({
        TableName: 'a',
        Item: { c: 'd' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });
    s3.copyObject({
        'Bucket': "dynamo-lambda-redshift-data",
        'CopySource': "/apig-kine-proxy/key",
        'Key': "key"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                CopyObjectResult: {
                    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                    LastModified: <Date Representation>
                }
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    sqs.receiveMessage({
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/359675929438/a',
        AttributeNames: ['All'],
        MaxNumberOfMessages: '1',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0'
    }, function (err, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {
            var message = data.Messages[0]
            // your logic to access this fetched message, should be here
        } else {
            console.log("No messages found in the queue");
        }
    });
}