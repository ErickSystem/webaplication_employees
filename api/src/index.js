import express from 'express';
import morgan from 'morgan';
import logger from './util/logger';

const { mongo } = require('./datasource/connection');

var allowCors = function(req, res, next){

  res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
}

// Settings
export async function start (config) {
    try {
      // Setting
      const app = express();
      
      app.set('config', config);
      app.set(allowCors);
      app.set('json spaces', 4);
      app.use(morgan('dev'));
      app.use(express.json());
  
      app.use((err, req, res, next) => {
          logger.error(err.stack || err);
      });
  
      // Starting the server
      app.listen(config.env.http.port, config.env.http.host, () => {
        logger.info(`Servidor iniciado em [ http://${config.env.http.host}:${config.env.http.port} ]`);
      });
  
      // Routes
      app.use('/api/employees', require('./routes/employee.routes'));
  
    } catch (err) {
      logger.error(err.stack || err);
    }
  }

