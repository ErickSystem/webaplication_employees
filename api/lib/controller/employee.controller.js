'use strict';

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const employeeCtrl = {};
const Employee = require('../model/employee');
const validator = require('validator');

employeeCtrl.geEmployees = (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
        _logger2.default.info('route list users');
        const employees = yield Employee.find();
        res.json(employees);
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

employeeCtrl.createEmployee = (() => {
    var _ref2 = _asyncToGenerator(function* (req, res) {
        _logger2.default.info('route create user');

        const datas = {
            name: validator.trim(validator.escape(req.body.name)),
            position: validator.trim(validator.escape(req.body.position)),
            office: validator.trim(validator.escape(req.body.office)),
            salary: validator.trim(validator.escape(req.body.salary))
        };

        const employee = new Employee(datas);
        yield employee.save();
        res.json({
            message: 'employee save with successfully'
        });
    });

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
})();

employeeCtrl.getEmployee = (() => {
    var _ref3 = _asyncToGenerator(function* (req, res) {
        _logger2.default.info('route get only one user');

        var _validator$trim = validator.trim(validator.escape(req.params));

        const id = _validator$trim.id;

        const employee = yield Employee.findById(id);
        res.json(employee);
    });

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
})();

employeeCtrl.updateEmployee = (() => {
    var _ref4 = _asyncToGenerator(function* (req, res) {
        _logger2.default.info('route to update user');

        var _validator$trim2 = validator.trim(validator.escape(req.params));

        const id = _validator$trim2.id;

        const employee = {
            name: validator.trim(validator.escape(req.body.name)),
            position: validator.trim(validator.escape(req.body.position)),
            office: validator.trim(validator.escape(req.body.office)),
            salary: validator.trim(validator.escape(req.body.salary))
        };
        yield Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
        res.json({
            message: 'Employee Updated'
        });
    });

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
})();

employeeCtrl.deleteEmployee = (() => {
    var _ref5 = _asyncToGenerator(function* (req, res) {
        _logger2.default.info('route to delete user');

        var _validator$trim3 = validator.trim(validator.escape(req.params));

        const id = _validator$trim3.id;

        yield Employee.findByIdAndRemove(id);
        res.json({
            message: 'Employee was deleted'
        });
    });

    return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
})();

module.exports = employeeCtrl;