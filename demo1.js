var http = require("http");
var url = require("url");
var router = require("./router");
var utils = require("./modules/utils");

http.createServer(function(request, response) {
	// filter second request
	if (request.url !== "/favicon.ico") {
		console.log(utils.getCurrentTime(), "request from", utils.getClientIp(request));

		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//, '');

		try {
			router[pathname](request, response);	
		} catch(error) {
			console.log("pathname: " + pathname + " is not exist!");
		}
		
	}
}).listen(5000);

console.log("Server running at http://127.0.0.1:5000");