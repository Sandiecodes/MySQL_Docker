// load package
const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    // host: '0.0.0.0'/localhost: Used to  locally run app
    host: "mysql1",
    user: "root",
    password: "admin",
    database: "test_db"
  });

const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to MYSQL with Docker');
  });

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});  

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);