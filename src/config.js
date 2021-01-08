import * as _ from 'lodash';
import * as path from 'path';

const env = process.env;

if (env.NODE_ENV === "test") {
  const dotenv = require("dotenv");
  dotenv.config({ path: path.resolve(process.cwd(), '../.env') })
}

const DEFAULT_API_URL = 'https://scratchmymap.com';
const configurations = {
  DEV: {
    API_URL: env.NODE_API_URL || 'http://localhost',
  },
  TEST: {
    API_URL: env.NODE_API_URL || DEFAULT_API_URL,
  },
  PRODUCTION: {
    API_URL: env.NODE_API_URL || DEFAULT_API_URL,
  }
};

const getEnvConfig = () => {
  let config = configurations.DEV;

  switch (env.NODE_ENV) {
    case 'test':
      config = configurations.TEST;
      break;
    case 'production':
      config = configurations.PRODUCTION;
      break;
  }

  return config;
};

export const isProd = () => {
  return env.NODE_ENV === 'production';
};

export const isDev = () => {
  return env.NODE_ENV === 'development';
};

export const isTest = () => {
  return env.NODE_ENV === 'test';
};

export const validateEnvVariables = () => {
  _.forOwn(configurations.DEV, (val, key) => {
    if (_.isUndefined(val) || !val) {
      console.warn(`DEV: ENV variable check fail for ${key}:`, val);
    }

    const testVal = configurations.TEST[key];
    if (_.isUndefined(testVal) || !testVal) {
      console.warn(`TEST: ENV variable check fail for ${key}:`, testVal);
    }

    const prodVal = configurations.PRODUCTION[key];
    if (_.isUndefined(prodVal) || !prodVal) {
      console.warn(`PROD: ENV variable check fail for ${key}:`, prodVal);
    }
  });
}

export const getConfig = (name) => {
  const c = getEnvConfig();
  if (_.isUndefined(c[name])) {
    return null;
    // throw new Error(`Environment variable ${name} is not provided!`);
  }
  return c[name];
};


export default getConfig;
