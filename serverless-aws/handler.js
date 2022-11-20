'use strict';
/*
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
*/
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./src/index')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) =>{
  return awsServerlessExpress.proxy(server,event,context)
}