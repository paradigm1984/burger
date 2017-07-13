
var orm = require('../config/orm.js');

var burger = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res); // callback result
		});
	},

	insertOne: function(cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res); // callback result
		});
	},

	updateOne: function(cb) {
		orm.updateOne('burgers', objColVals, condition, function(res) {
			cb(res); // callback result
		})
	}
};

module.exports = burger;


//	I keep getting an error for insertOne that it cant find cols, and for 
//	updateOne it cant find objColsVals. i was trying to follow the cat example
//	as it seems to be a similar structure, and it looks as if ive set everthing up 
//	correctly. i know that the orm and burger.js files are working since theyre executing
//	the selectAll function. im not sure if the error is coming from the setup in the orm 
//	file or the excution of the edit / insertion functions.
