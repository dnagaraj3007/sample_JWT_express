const Employee = require('../models/employee.model.js');

const create = (req, res) => {
  if (!req.body.name || !req.body.id) {
    res.status(400).send({
      message: 'Name and id are mandatory',
    });
  }

  const employee = new Employee({
    name: req.body.name,
    id: req.body.id,
  });

  employee.save().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || 'Error occured while creating the employee',
    });
  });
};


const findAll = (req, res) => {
  Employee.find().then(data => res.send(data)).catch((err) => {
    res.status(500).send({
      message: err.message || 'Error fetching data',
    });
  });
};


const findOne = (req, res) => {
  Employee.findById(req.params.empId).then((employee) => {
    if (!employee) {
      res.status(404).send({
        message: `Could not find employee with employee id:${req.params.empId}`,
      });
    }
    res.send(employee);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || `Could not find employee with employee id:${req.params.empId}`,
    });
  });
};


const updateOne = (req, res) => {
  const emp = {
    name: req.body.name,
    id: req.body.id,
  };
  Employee.findOneAndUpdate(req.params.empId, emp, { new: true }).then((data) => {
    if (!data) {
      res.status(404).send({
        message: `Error updating employee with empid:${req.params.empId}`,
      });
    }
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || `Error updating employee with empid:${req.params.empId}`,
    });
  });
};


const deleteOne = (req, res) => {
  Employee.findOneAndDelete(req.params.empId).then((data) => {
    if (!data) {
      res.status(404).send({
        message: `Error deleting employee with empid:${req.params.empId}`,
      });
    }
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || `Error deleting employee with empid${req.params.empId}`,
    });
  });
};

module.exports = {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};
