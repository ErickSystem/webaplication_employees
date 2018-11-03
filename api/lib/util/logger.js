'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
  appenders: {
    out: { type: 'console' },
    task: { type: 'dateFile', filename: 'logs/task', "pattern": "-dd.log", alwaysIncludePattern: true },
    result: { type: 'dateFile', filename: 'logs/result', "pattern": "-dd.log", alwaysIncludePattern: true },
    error: { type: 'dateFile', filename: 'logs/error', "pattern": "-dd.log", alwaysIncludePattern: true },
    default: { type: 'dateFile', filename: 'logs/default', "pattern": "-dd.log", alwaysIncludePattern: true },
    rate: { type: 'dateFile', filename: 'logs/rate', "pattern": "-dd.log", alwaysIncludePattern: true }
  },
  categories: {
    default: { appenders: ['out', 'default'], level: 'info' },
    task: { appenders: ['task'], level: 'info' },
    result: { appenders: ['result'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
    rate: { appenders: ['rate'], level: 'info' }
  }
});

const logger = _log4js2.default.getLogger();

exports.default = logger;