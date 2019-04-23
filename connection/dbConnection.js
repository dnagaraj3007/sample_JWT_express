const mongoose = require('mongoose');
const dbConfig = require('../config/database.config.js');

mongoose.Promise = global.Promise;

function connectToDB() {
  mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
  }).then(() => {
    console.log('Successfully connected to database');
  }).catch((err) => {
    console.log('Error connecting to database', err);
    process.exit();
  });
}

module.exports = {
  connectToDB,
};
