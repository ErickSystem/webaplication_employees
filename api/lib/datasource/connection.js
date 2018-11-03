'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = require('../../config/env').default;
const URI = config.mongod_db.uri + ':' + config.mongod_db.port + config.mongod_db.db;

_mongoose2.default.connect(URI, { useNewUrlParser: true }).then(db => _logger2.default.info('Mongo DB is connected')).catch(err => _logger2.default.error(err));

module.exports = _mongoose2.default;