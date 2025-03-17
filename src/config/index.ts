import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Define validation function for required environment variables
const validateEnv = (name: string, defaultValue?: string): string => {
    // Skip validation in test environment
    if (process.env.NODE_ENV === 'test') {
      return process.env[name] || defaultValue || 'test_default';
    }
    
    const value = process.env[name] || defaultValue;
    if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
  };

// Server configuration
export const SERVER_CONFIG = {
  PORT: parseInt(process.env.PORT || '3000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  isProduction: (process.env.NODE_ENV || 'development') === 'production',
  isDevelopment: (process.env.NODE_ENV || 'development') === 'development',
};

// API configuration
export const API_CONFIG = {
  VERSION: process.env.API_VERSION || 'v1',
  RATE_LIMIT: {
    WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
    MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  },
};

// Security configuration
export const SECURITY_CONFIG = {
  JWT_SECRET: validateEnv('JWT_SECRET', SERVER_CONFIG.isDevelopment ? 'dev_secret_key' : undefined),
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',
  CORS_ORIGIN: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:8080'],
};

// Logging configuration
export const LOGGING_CONFIG = {
  LEVEL: process.env.LOG_LEVEL || (SERVER_CONFIG.isProduction ? 'info' : 'debug'),
};

export default {
  SERVER: SERVER_CONFIG,
  API: API_CONFIG,
  SECURITY: SECURITY_CONFIG,
  LOGGING: LOGGING_CONFIG,
};

