app.service('UserService', function ($http) {
	return {
		getUsers: function () {
			return $http.get('/users').then(function(response) {
				return response;
			});
		},
		getUser: function () {
			return $http.get('/user').then(function(response) {
				return response;
			});
		}
	}
});