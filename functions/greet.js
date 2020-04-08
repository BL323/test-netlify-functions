const { GREET_MESSAGE } = process.env;

// functions/greet.js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GREET_MESSAGE
  };
};