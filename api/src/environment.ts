import * as config from 'config';

export const environment = {
  server: {
    port: config.get('server').port,
    production: config.get('server').production,
    origin: config.get('server').origin,
  },

  sentry: {
    url: config.get('sentry').url,
    traces: config.get('sentry').traces,
  },

  db: {
    type: config.get('db').type,
    host: config.get('db').host,
    port: config.get('db').port,
    database: config.get('db').database,
    username: config.get('db').username,
    password: config.get('db').password,
  },
};
