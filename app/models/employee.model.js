const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: String,
  id: Number,
}, {
  timestamps: true,
});


module.exports = mongoose.model('Employee', employeeSchema);
