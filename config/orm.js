var connection = require("./connection.js");

var orm = {
    selectAll: function(cbFunc){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;

            cbFunc(result);
        })
    },
    insertOne: function(burgerInfo, cbFunc){
        var queryString = "INSERT INTO burgers (burger_name, date) VALUES (?)";
        connection.query(queryString, burgerInfo, function(err, result){
            if (err) throw err;

            cbFunc(result);
        })
    },
    updateOne: function(burgerInfo, burgerToUpdate, cbFunc){
        var queryString = "UPDATE burgers SET (?) WHERE " + burgerToUpdate;
        connection.query(queryString, burgerInfo, function(err, result){
            if (err) throw err;

            cbFunc(result);
        })
    }
}

module.exports = orm;