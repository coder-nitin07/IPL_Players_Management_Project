const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IPL Players Management API',
      version: '1.0.0',
      description: 'API documentation for IPL Players Management system',
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || 'http://localhost:3000',
      },
    ],
  },
  apis: [ './swagger/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;