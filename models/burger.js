
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