import mongoose from 'mongoose';
import logger from '../util/logger';

const config = require('../../config/env').default;
const URI = config.mongod_db.uri + ':' + config.mongod_db.port + config.mongod_db.db

if (typeof config.mongod_db.uri != 'undefined'
     && typeof config.mongod_db.port != 'undefined' 
     && typeof config.mongod_db.db != 'undefined'){

    mongoose.connect(URI, { useNewUrlParser: true })
        .then(db => logger.info('Mongo DB is connected'))
        .catch(err => logger.error(err));
}else{
    mongoose.connect('mongodb://mongodb.local:27017/employee-cruds', { useNewUrlParser: true })
        .then(db => logger.info('Mongo DB is connected'))
        .catch(err => logger.error(err));
}

module.exports = mongoose;
