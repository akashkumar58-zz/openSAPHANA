'use strict';

var express = require("express");
var async = require("async");

module.exports = function() {
	var app = express.Router();
	//Hello Router
	app.get("/Hi", (req, res) => {
		res.send("Hello World Node.js");
	});
	
	return app;
};
