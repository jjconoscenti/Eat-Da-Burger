var connection = require("./connection.js");

function printQuestionMarks(num) {
    // set empty questionArray
    var questionArr = [];

    for (var i = 0; i < num; i++) {
        questionArr.push("?");
    }
    return questionArr.toString();
};