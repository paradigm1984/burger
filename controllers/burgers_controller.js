
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var burger = require("../models/burger.js");
var methodOverride = require("method-override");;



router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/vnd.api+json' }));
router.use(bodyParser.urlencoded({ extended: true }));

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

// moves a burger to devoured - works
router.post('/burgers/:id', function(req, res){
	var condition = req.params.id;
	// console.log(condition);

	burger.updateOne(true, condition, function(data){
		res.redirect('/');
	});
});

// deletes a devoured burger - doesnt work
router.post('/delete/:id', function(req, res){
	var condition = req.params.id;
	// console.log(condition);

	burger.deleteOne(condition, function(data){
		res.redirect('/');
	});
});


module.exports = router;
