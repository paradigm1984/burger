
var connection = require('../config/connections.js');

// function to help generate mysql syntax
function printQuestionMarks(num) {

	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// function to help generate mysql syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
	// selects all burgers
	selectAll: function(tableInput, cb) {
		// constructing the query in MYSQL syntax.
		// trying to dynamically switch out the input
		var queryString = 'SELECT * FROM ' + tableInput + ';';

		// performs the actual query
		connection.query(queryString, function(err, result) {
			if(err){
				throw err;
			}

			// returns the results in a callback
			cb(result);
		})
	}

	// inserts a new burger
	

	// updates an existing burger


} // === END orm object


module.exports = orm;


