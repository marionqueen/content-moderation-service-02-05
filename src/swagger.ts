import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';
import swaggerUI from 'swagger-ui-express';

// Types for swagger options
export interface SwaggerFilterOptions {
  excludeInternal?: boolean;
}

/**
 * Get Swagger options with filtering capability
 * @param filterOptions Options to filter the Swagger documentation
 * @returns SwaggerOptions for use with swagger-jsdoc
 */
export const getSwaggerOptions = (filterOptions: SwaggerFilterOptions = {}): swaggerJSDoc.Options => {
  // Base Swagger definition
  const swaggerDefinition: any = {
    openapi: '3.0.0',
    info: {
      title: 'Content Moderation Service API',
      version: '1.0.0',
      description: 'API for content moderation and user management',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: '/api/v1',
        description: 'API v1'
      }
    ],
    components: {
      // ... schema definitions as in MOD-501
    }
  };

  // If excluding internal endpoints, add a tag filter
  if (filterOptions.excludeInternal) {
    swaggerDefinition.tags = [
      { name: 'Moderation', description: 'Content moderation API' },
      { name: 'Public', description: 'Publicly accessible endpoints' }
    ];
    
    // We'll filter by tag in the controller code, so no changes needed here
  }

  // Options for the swagger docs
  const options = {
    swaggerDefinition,
    // Path to the API docs
    apis: ['./src/api/v1/routes/*.ts', './src/api/v1/controllers/*.ts']
  };

  return options;
};

/**
 * Configure Swagger
 * @param app Express application
 */
export const setupSwagger = (app: Express): void => {
  // Get Swagger options (include all endpoints for internal use)
  const options = getSwaggerOptions();
  
  // Initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options);

  // Serve swagger docs
  app.use('/api-docs', swaggerUI.serve as any, swaggerUI.setup(swaggerSpec) as any);

  // Serve swagger spec as JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Swagger documentation available at /api-docs');
};