const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'laboratorios_web',
    password: ''
});

module.exports = pool.promise();