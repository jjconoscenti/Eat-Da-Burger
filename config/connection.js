var mysql = require('mysql');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.mysqlhost,
        user: process.env.mysqluser,
        password: process.env.mysqlpass,
        database: process.env.mysqldb
    });
}

connection.connect(function(err) {
    if (err) {
        console.log(`Error: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;