import fs from 'fs';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

// Import Swagger configuration
// Assuming the swagger.ts file from MOD-501 is available
import { getSwaggerOptions } from '../swagger';

// Get Swagger options, but filter out internal endpoints
const options = getSwaggerOptions({ excludeInternal: true });

// Generate OpenAPI specification
const swaggerSpec = swaggerJSDoc(options);

// Create output directory if it doesn't exist
const outputDir = path.resolve(__dirname, '../../public/api-docs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write OpenAPI specification to file
fs.writeFileSync(
  path.resolve(outputDir, 'openapi.json'),
  JSON.stringify(swaggerSpec, null, 2)
);

console.log(`OpenAPI specification written to ${outputDir}/openapi.json`);