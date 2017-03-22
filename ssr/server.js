const fs = require('fs');
const express = require('express');
const server = express();

// add Vue to global scope, so it's available to app.js
global.Vue = require('vue');
const app = require('./app');
const renderer = require('vue-server-renderer').createRenderer();

const layout = fs.readFileSync('./index.html', 'utf-8');
server.get('*', function (request, response) {
	renderer.renderToString(app, function (error, html) {
		if (error) {
			console.log(error);
			return response.status(500).send('Server error');
		}
		response.send(layout.replace('<div id="app"></div>', html));
	});
});

server.listen(8000, function (error) {
	if (error) throw error;
	console.log('Server is running on port 8000');
});