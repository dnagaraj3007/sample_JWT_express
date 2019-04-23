const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./connection/dbConnection.js');

dbConnection.connectToDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Checking ...' });
});

require('./app/routes/employee.routes.js')(app);

app.listen(3000, () => {
  console.log('Listening on 3000');
});
