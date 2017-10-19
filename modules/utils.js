var moment = require("moment");

module.exports = {
	getClientIp: function(request) {
		return request.headers['x-forwarded-for'] ||
		request.connection.remoteAddress ||
		request.socket.remoteAddress ||
		request.connection.socket.remoteAddress;
	},
	getCurrentTime: function() {
		return moment().format();
	},
};