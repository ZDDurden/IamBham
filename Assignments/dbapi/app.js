
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'IAmBh@m2019',
    database: 'chirpr'
});
  
// connect to database
dbConn.connect(); 
 
 
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;