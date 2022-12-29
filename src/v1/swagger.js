import swaggerUi from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc';
import { API_URL } from '../app.js';

// Metadata info about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Park API', version: '1.0.0' },
    servers: [{ url: '/api/v1' }],
  },
  apis: ['src/v1/routes/*.js', 'src/schemas/*.js'],
};

// Docs en JSON format
const swaggerSpec = swaggerJSdoc(options);

const route = 'docs';

// Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use(`${API_URL}/${route}`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get(`${API_URL}/${route}.json`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Version 1 Docs are available at http://localhost:${port}${API_URL}/${route}`);
};

export default swaggerDocs;
