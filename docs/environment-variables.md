# Environment Variables Documentation

This document outlines all environment variables used by the Content Moderation Service.


## Server Configuration
 
| Variable   | Description | Default | Required |
|----------  |-------------|---------|----------|
| `PORT`     | The port on which the server will listen. Can be overridden via environment variable. | 3000        | Optional        |
| `NODE_ENV` | Specifies the application environment (development, production, test). Use "development" for local, "production" for live deployment, "test" for testing. | development | Optional        |

## API Settings

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| API_VERSION | API version for endpoints | v1 | No |
| RATE_LIMIT_WINDOW_MS | Time window for rate limiting in milliseconds | 60000 | No |
| RATE_LIMIT_MAX_REQUESTS | Maximum requests per window | 100 | No |

## Security Settings

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| JWT_SECRET | Secret key for JWT token signing | dev_secret_key (in dev) | Yes in production |
| JWT_EXPIRATION | JWT token expiration period | 1d | No |
| CORS_ORIGIN | Comma-separated list of allowed CORS origins | http://localhost:8080 | No |

## Logging

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| LOG_LEVEL | Minimum log level to output | debug (dev), info (prod) | No |

## Setup Instructions

1. Copy the `.env.example` file to `.env`
2. Modify the values in `.env` as needed for your environment
3. Never commit the `.env` file to version control

For production deployments, ensure that all required variables are properly set with secure values.