var connection = require("./connection.js");

function printQuestionMarks(num) {
    // set emptinputArrayay
    var inputArray = [];

    for (var i = 0; i < num; i++) {
        inputArray.push("?");
    }
    return inputArrayputArray.toString();
};

function objectToSql(ob) {
    var inputArray = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return inputArray.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableInput, userInput, cb) {
        var queryString = `INSERT INTO ${tableInput} SET ?`;
        connection.query(queryString, { burger_name: userInput.burger_name, devoured: false }, function(err, result) {
            if (err) throw err;
            console.log('Input added!');
            cb(result);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET ${objToSql(objColVals)} WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log('Update complete!');
            cb(result);
        });
    },

    delete: function(tableInput, condition, cb) {
        var querySting = `DELETE FROM ${tableInput} WHERE ${condition}`;
        connection.query(querySting, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;