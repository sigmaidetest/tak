let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(context));
    console.log(JSON.stringify(callback));
}