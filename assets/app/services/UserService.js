app.service('UserService', ['$http', function ($http) {
	return {
		getUsers: function () {
			return $http.get('/api/users').then(function(response) {
				return response;
			});
		},
		getUser: function () {
			return $http.get('/api/user').then(function(response) {
				return response;
			});
		}
	}
}]);