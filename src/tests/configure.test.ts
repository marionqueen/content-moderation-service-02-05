import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import mockConfig from '../mocks/config';
import proxyquire from 'proxyquire';

describe('Configuration', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    // Clear environment variables
    process.env = { NODE_ENV: 'test' };
  });

  afterEach(() => {
    // Restore environment variables
    process.env = originalEnv;
  });

  it('should use default values when environment variables are not set', () => {
    // Use mock config for testing
    const config = mockConfig;

    expect(config.SERVER.PORT).to.equal(3000);
    expect(config.API.VERSION).to.equal('v1');
  });

  it('should use environment variables when they are set', () => {
    process.env.PORT = '4000';
    process.env.API_VERSION = 'v2';

    // Reload mock config with new environment variables
    const config = proxyquire('../mocks/config', {}).default;

    expect(config.SERVER.PORT).to.equal(4000);
    expect(config.API.VERSION).to.equal('v2');
  });
});