var Client = require('node-rest-client').Client;
client = new Client();

getGitStatus = function(callback) {
	client.get("https://status.github.com/api/status.json", function(data, response){
		callback(data);
	});
}

getGitAvailability = function(callback){
	client.get("https://status.github.com/api/messages.json", function(data, response){
		callback(data);
	});
}

exports.getStatus = function(callback) {
	getGitStatus(function(data, response){
		callback(data);
	});
}

exports.getAvailability = function(callback) {
	getGitAvailability(function(data, response){
		callback(data);
	});
}
