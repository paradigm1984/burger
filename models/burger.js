
var orm = require('../config/orm.js');

var burger = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res); // callback result
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res); // callback result
		});
	},

	updateOne: function(vals, condition, cb) {
		orm.updateOne(vals, condition, function(res) {
			cb(res); // callback result
		})
	},
	deleteOne: function(condition, cb) {
		orm.deleteOne(condition, function(res) {
			cb(res); // callback result
		})
	}

}; 

module.exports = burger;

