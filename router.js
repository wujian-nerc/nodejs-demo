var User = require("./modules/User");
var Teacher = require("./modules/Teacher");
var FileIO = require("./modules/FileIO");

function getRecall(request, response) {
	return function(data) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(data);
		response.end();
	}
}

module.exports = {
	user: function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		var user = new User(1, "wujian", 27);
		user.enter(response);
		response.end();
	},
	teacher: function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		var teacher = new Teacher(2, "wujian", 28);
		teacher.enter(response);
		teacher.teach(response);
		response.end();
	},
	register: function(request, response) {
		var recall = getRecall(request, response);
		FileIO.read("./views/register.html", recall);
	},
	login: function(request, response) {
		var recall = getRecall(request, response);
		FileIO.read("./views/login.html", recall);
	},
	loginSync: function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		var data = FileIO.readSync("./views/login.html");
		response.write("loginSync page content: ")
		response.write(data);
		response.end();
	},
	write: function(require, response) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		FileIO.write("./views/write.html", "write page!");
		response.write("write success!");
		response.end();
	},
	writeSync: function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		FileIO.writeSync("./views/writeSync.html", "writeSync page!");
		response.write("writeSync success!");
		response.end();
	},
	showImage: function(require, response) {
		response.writeHead(200, {"content-Type": "image/jpeg"});
		function recall(data) {
			response.write(data, "binary");
			response.end();
		};
		FileIO.readImage("./images/demo.jpg", recall);
	}
};