'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = undefined;

// Settings
let start = exports.start = (() => {
    var _ref = _asyncToGenerator(function* (config) {
        try {
            // Setting
            const app = (0, _express2.default)();

            app.set('config', config);
            app.set(allowCors);
            app.set('json spaces', 4);
            app.use((0, _morgan2.default)('dev'));
            app.use(_express2.default.json());

            app.use(function (err, req, res, next) {
                _logger2.default.error(err.stack || err);
            });

            // Starting the server
            app.listen(config.env.http.port, config.env.http.host, function () {
                _logger2.default.info(`Servidor iniciado em [ http://${config.env.http.host}:${config.env.http.port} ]`);
            });

            // Routes
            app.use('/api/employees', require('./routes/employee.routes'));
        } catch (err) {
            _logger2.default.error(err.stack || err);
        }
    });

    return function start(_x) {
        return _ref.apply(this, arguments);
    };
})();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _logger = require('./util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./datasource/connection');

const mongo = _require.mongo;


var allowCors = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
};