```markdown

Public API Documentation Deployment
This document explains how the public API documentation is generated and deployed to GitHub Pages.

Overview
The Content Moderation Service provides two sets of API documentation:

Internal Documentation: Complete API documentation accessible at /api-docs when running the service
Public Documentation: Filtered documentation deployed to GitHub Pages with only publicly accessible endpoints
What is Public vs. Internal?
Public Endpoints: Endpoints tagged with both Moderation and Public in their JSDoc comments
Internal Endpoints: Endpoints tagged with only Moderation (or other internal tags)
Generation Process
The public documentation is generated using a script that:

Uses the same Swagger configuration as the internal documentation
Filters out endpoints not tagged as Public
Generates an OpenAPI specification file (openapi.json)
Places this file in the public/api-docs directory
Deployment
The documentation is deployed to GitHub Pages through one of these methods:

Manual Deployment
# Generate the documentation
npm run generate-docs

# Deploy to GitHub Pages
npm run deploy-docs
Automatic Deployment
A GitHub Actions workflow automatically deploys the documentation when changes are pushed to the main branch.

Customizing the Documentation
Adding a Public Endpoint
To make an endpoint visible in the public documentation, add the Public tag to its JSDoc:

/**
 * @swagger
 * /some/endpoint:
 *   get:
 *     summary: An endpoint description
 *     tags: [Moderation, Public]  # Include the Public tag
 *     ...
 */
Hiding an Endpoint
To hide an endpoint from public documentation, ensure it doesn't have the Public tag:

/**
 * @swagger
 * /some/internal/endpoint:
 *   get:
 *     summary: An internal endpoint
 *     tags: [Moderation]  # No Public tag
 *     ...
 */
Security Considerations
Never expose sensitive endpoints in the public documentation
Regularly review the public documentation to ensure no internal endpoints are accidentally exposed
The public documentation should only describe the API, not include implementation details ```