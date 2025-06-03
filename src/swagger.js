
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API final do Jackson',
      version: '1.0.0',
      description: 'Documentação da API final do Jackson',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para os arquivos de rota onde as anotações Swagger estão localizadas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
