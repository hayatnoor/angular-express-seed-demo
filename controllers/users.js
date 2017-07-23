var fs = require('fs');


module.exports = {

	getUsers: function(req, res) {

		fs.readFile('./data/users.json', 'utf8', function (err, data) {
			if (err) {
				console.log('Error: ' + err);
				return;
			}

			var jsonData = JSON.parse(data);

			res.send(jsonData);
		});

	},

	getUser: function(req, res) {

		fs.readFile('./data/user.json', 'utf8', function (err, data) {
			if (err) {
				console.log('Error: ' + err);
				return;
			}

			var jsonData = JSON.parse(data);

			res.send(jsonData);
		});

	}

};
