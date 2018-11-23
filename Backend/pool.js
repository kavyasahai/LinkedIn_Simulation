var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 1,
  port: "3306",
  host: "ubuntu@34.212.99.86",
  user: "root",
  password: "root",
  database: "linkedin"
});

module.exports = pool;
