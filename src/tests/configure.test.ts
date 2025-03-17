import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';

describe('Configuration', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    // Clear environment variables before each test
    process.env = { NODE_ENV: 'test' };
  });

  afterEach(() => {
    // Restore original environment variables
    process.env = originalEnv;
  });

  it('should use default values when environment variables are not set', () => {
    // Delete cached module to reload with new env
    delete require.cache[require.resolve('../config')];
    const config = require('../config').default;

    expect(config.SERVER.PORT).to.equal(3000);
    expect(config.API.VERSION).to.equal('v1');
  });

  it('should use environment variables when they are set', () => {
    process.env.PORT = '4000';
    process.env.API_VERSION = 'v2';

    // Delete cached module to reload with new env
    delete require.cache[require.resolve('../config')];
    const config = require('../config').default;

    expect(config.SERVER.PORT).to.equal(4000);
    expect(config.API.VERSION).to.equal('v2');
  });
});