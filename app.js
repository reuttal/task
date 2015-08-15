var github = require('./github');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/status', function (request, response) {
	github.getStatus(function(data) {
		response.send(data);
	});
});

app.get('/availability', function (request, response) {
	github.getAvailability(function(data){
		response.send(data);
	});
});

app.use(function(request, response, next) {
  response.status(404).send('Sorry cant find that!');
});

app.listen(8888, function(){
  console.log('Server is now listening on port 8888 . . .')
});