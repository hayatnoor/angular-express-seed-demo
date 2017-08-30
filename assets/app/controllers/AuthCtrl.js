app.controller('AuthCtrl', ['$scope', '$rootScope', 'AuthService', '$location', function($scope, $rootScope, AuthService, $location) {

	$scope.register = function () {
		var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.register(user).then(function(response) {
			$rootScope.user = response.data;

			$location.path('/');
		});
	};

	$scope.login = function () {
		var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.login(user).then(function(response) {

			if (response.data && (!angular.equals({}, response.data))) {
				$rootScope.user = response.data;

				$location.path('/');
			} else {
				alert('No user found');
			}

		});
	};


	$scope.logout = function () {
		$rootScope.user = null;
		$location.path('/');
	};


}]);