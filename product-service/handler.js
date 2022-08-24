'use strict';

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: {
      products: [{
        productName: "Stone",
        price: 123
      }]
    }
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
