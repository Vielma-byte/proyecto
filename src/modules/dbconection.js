const mysql = require('mysql');

module.exports = () => mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'pasteleria',
}); // crea la conexion a la base de datos
