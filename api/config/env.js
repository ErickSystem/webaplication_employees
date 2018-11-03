export default {
    environment: process.env.NODE_ENV || 'dev',
    virtualHost: process.env.VIRTUAL_HOST,
    http: {
      host: process.env.HTTP_HOST || '0.0.0.0',
      port: process.env.HTTP_PORT || '3000'
    },
    mongod_db: {
      uri: process.env.MONGO_DB,
      db: process.env.DB,
      port: process.env.PORT
    }
    // },
    // redis: {
    //   host: process.env.REDIS_HOST || 'localhost',
    //   port: process.env.REDIS_PORT || '6379',
    //   db: process.env.REDIS_DB || '5',
    // },
  };
  