var fs = require('fs');


module.exports = {

	register: function(req, res) {

		res.send(req.body);

	},

	login: function(req, res) {

		var user = req.body;

		fs.readFile('./data/accounts.json', 'utf8', function (err, data) {
			if (err) {
				console.log('Error: ' + err);
				return;
			}

			var jsonData = JSON.parse(data);

			var userFound = {};
			for (var i = 0; i < jsonData.length; i++) {
				if (user.email === jsonData[i].email && user.password === jsonData[i].password) {
					userFound = jsonData[i];
				}
			}

			res.send(userFound);
		});

	}

};
