let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
    s3.listObjects({
        'Bucket': 'apig-kine-proxy',
        'MaxKeys': 10,
        'Prefix': 'ba'
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
    s3.putObject({
        "Body": "a",
        "Bucket": "dynamo-lambda-redshift-data",
        "Key": "b",
        "ServerSideEncryption": "AES256",
        "ACL": "authenticated-read",
        "Tagging": "c=d",
        "Metadata": {
            "e": "f"
        }
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
    s3.getObject({
        'Bucket': "randomized_blogspot_com_images",
        'Key': "fa"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                AcceptRanges: "bytes", 
                ContentLength: 3191, 
                ContentType: "image/jpeg", 
                ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
                LastModified: <Date Representation>, 
                Metadata: {...}, 
                TagCount: 2, 
                VersionId: "null"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.copyObject({
        'Bucket': "s3-lambda-s3",
        'CopySource': "/dynamo-lambda-redshift-data/ea",
        'Key': "ea"
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
    s3.deleteObject({
        'Bucket': "randomized_blogspot_com_images",
        'Key': "few"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.listBuckets({})
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                Buckets: [
                    {
                        CreationDate: <Date Representation>, 
                        Name: "examplebucket"
                    }, 
                    {
                        CreationDate: <Date Representation>, 
                        Name: "examplebucket2"
                    }
                ], 
                Owner: {
                    DisplayName: "own-display-name", 
                    ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
                }
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.getBucketLocation({
        'Bucket': "randomized_blogspot_com_images"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                LocationConstraint: "us-west-2"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.createBucket({
        Bucket: "tre",
        CreateBucketConfiguration: {
            LocationConstraint: "us-east-1"
        }
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                Location: "http://examplebucket.s3.amazonaws.com/"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    s3.deleteBucket({
        Bucket: "panittuwak"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

}