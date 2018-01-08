let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
    s3.putObject({
        "Body": JSON.stringify(event),
        "Bucket": "dynamo-lambda-redshift-data",
        "Key": "event.json"
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.listObjects({
        'Bucket': 's3-lambda-s3-data',
        'MaxKeys': 10,
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
}