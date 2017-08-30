app.service('AuthService', ['$http', function ($http) {
	return {
		register: function (user) {
			return $http.post('/api/register', user).then(function(response) {
				return response;
			});
		},
		login: function (user) {
			return $http.post('/api/login', user).then(function(response) {
				return response;
			});
		}
	}
}]);