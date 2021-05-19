const database = require('../conf/database');

exports.getUsers = function () {
    return database.query('SELECT * FROM notflix.usuario');
}