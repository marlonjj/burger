var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cbFunc){
        orm.selectAll(function(res){
            cbFunc(res);
        })
    },
    insertOne: function(burgerInfo, cbFunc){
        orm.insertOne(burgerInfo, function(res){
            cbFunc(res);
        })
    },
    updateOne: function(burgerInfo, burgerToUpdate, cbFunc){
        orm.updateOne(burgerInfo, burgerToUpdate, function(res){
            cbFunc(res);
        })
    }
}

module.exports = burger;