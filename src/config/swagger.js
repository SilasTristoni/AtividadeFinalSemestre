const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API final do Jackson',
      version: '1.0.0',
      description: 'Documentação da API final do Jackson',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, '../routes/*.js')], // caminho absoluto para pegar as anotações
};



const swaggerSpec = swaggerJsdoc(options);
console.log(JSON.stringify(swaggerSpec, null, 2)); 

module.exports = swaggerSpec;
