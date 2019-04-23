const employee = require('../controller/employee.controller.js');

module.exports = (app) => {
  app.post('/employee', employee.create);
  app.get('/employees', employee.findAll);
  app.get('/employee/:empId', employee.findOne);
  app.put('/employee/:empId', employee.updateOne);
  app.delete('/employee/:empId', employee.deleteOne);
};
