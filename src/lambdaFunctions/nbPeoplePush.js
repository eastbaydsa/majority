exports.handler = function nbPeoplePush(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    body: "Hello, World from src folder"
  });
}