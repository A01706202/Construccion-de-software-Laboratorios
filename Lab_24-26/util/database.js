const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sugerencias_enviadas',
    password: ''
});

module.exports = pool.promise();