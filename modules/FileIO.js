var fs = require("fs");

module.exports = {
	read: function(path, recall) {
		fs.readFile(path, function(error, data) {
			if (error) {
				console.log("read file: " + path + " failed, error: " + error);
			} else {
				recall(data);
			}
		});
	},
	readSync: function(path) {
		var data = fs.readFileSync(path, "utf-8");
		return data;
	},
	write: function(path, data) {
		fs.writeFile(path, data, function(error) {
			if (error) {
				throw error;
			}
			console.log("It's saved!");
		})
	},
	writeSync: function(path, data) {
		fs.writeFileSync(path, data);
	},
	readImage: function(path, recall) {
		fs.readFile(path, "binary", function(error, data) {
			if (error) {
				console.log("read file: " + path + " failed, error: " + error);
			} else {
				recall(data);
			}
		});
	}
};