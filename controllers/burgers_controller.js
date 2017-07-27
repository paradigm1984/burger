
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var burger = require("../models/burger.js");
var methodOverride = require("method-override");;


// load all burgers that exist - works
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});

});

// add a new burger - works
router.post('/burgers', function(req, res) {
	burger.insertOne([
		'burger_name'
	], [
	req.body.burger_name
	], function(data) {
		res.redirect('/');
	});
});

// moves a burger to devoured - doesnt work
router.post('/burgers/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	burger.updateOne({'eaten': req.params.eaten}, condition, function(data){
		res.redirect('/');
	});
});

module.exports = router;
