import logger from '../util/logger';
const employeeCtrl = {};
const Employee = require('../model/employee');

employeeCtrl.geEmployees = async (req, res) => {
    logger.info('route list users')
    const employees = await Employee.find();
    res.json({users: employees});
};

employeeCtrl.createEmployee = async (req, res) => {
    logger.info('route create user')

    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        message: 'employee save with successfully'
    });
};

employeeCtrl.getEmployee = async (req, res) => {
    logger.info('route get only one user')
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json({user: employee});
};

employeeCtrl.updateEmployee = async (req, res) => {
    logger.info('route to update user')

    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true });
    res.json({
        message: 'Employee Updated'
    });
    
};

employeeCtrl.deleteEmployee = async (req, res) => {
    logger.info('route to delete user')
    const { id } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({
        message: 'Employee was deleted'
    });
};

module.exports = employeeCtrl;