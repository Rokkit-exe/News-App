const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`EVENT: ${JSON.stringify(event.pathParameters.newsId)}`);
  const newsId = event.pathParameters.newsId;
  const news = { id: newsId, news: 'news'+ newsId };
  const newsObject = app.getNews(newsId);
  console.log(`NEWSOBJECT: ${JSON.stringify(newsObject)}`);
  console.log(`NEWS: ${JSON.stringify(news)}`);

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
