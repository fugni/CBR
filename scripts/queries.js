require('dotenv').config();
const mysql = require('mysql'); 

// db connection
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function(err) {
    if (err) throw err;
});


function getAll() {
    connection.query('SELECT * FROM chapters', function (error, results) {
        if (error) throw error;
        return results;
    });
}

module.exports = {
    getAll
}