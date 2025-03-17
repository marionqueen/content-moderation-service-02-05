export const SERVER_CONFIG = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    isProduction: (process.env.NODE_ENV || 'development') === 'production',
    isDevelopment: (process.env.NODE_ENV || 'development') === 'development',
  };
  
  export const API_CONFIG = {
    VERSION: process.env.API_VERSION || 'v1',
    RATE_LIMIT: {
      WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
      MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
    },
  };
  
  export const SECURITY_CONFIG = {
    JWT_SECRET: process.env.JWT_SECRET || 'test_secret_key',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',
    CORS_ORIGIN: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:8080'],
  };
  
  export const LOGGING_CONFIG = {
    LEVEL: process.env.LOG_LEVEL || (SERVER_CONFIG.isProduction ? 'info' : 'debug'),
  };
  
  export default {
    SERVER: SERVER_CONFIG,
    API: API_CONFIG,
    SECURITY: SECURITY_CONFIG,
    LOGGING: LOGGING_CONFIG,
  };