var express = require('express');
var server = express();
var dani = require('./danielle.json');
var port = 8080;

server.get('/', function (request, response) {
  response.send(`Go to /dani to find out more about me`);
});

server.get('/dani', function (request, response) {
  response.json(dani);
});

server.get('*', function (request, response) {
  response.status(404);
  response.send("<h1>This is not the page you are looking for....</h1>");
});

server.listen(port);
