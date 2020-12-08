const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || `{
  host: 'localhost',
  user: 'root',
  password: '#eemaMi05',
  database: 'employee_tracker'
}`)

module.exports = connection
