var Client = require('node-rest-client').Client;
client = new Client();

exports.getStatus = function(callback) {
	client.get("https://status.github.com/api/status.json", function(data, response){
		callback(data);
	});
}

exports.getAvailability = function(callback){
	client.get("https://status.github.com/api/messages.json", function(data, response){
		callback(data);
	});
}
