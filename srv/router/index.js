'use strict';

module.exports = (app, server) => {
	app.use('/node', require('../routes/myNode')());
}