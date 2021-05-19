const database = require('../conf/database');

exports.getFilmes = function () {
    return database.query('SELECT * FROM notflix.filme');
}