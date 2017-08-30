app.controller('AuthCtrl', ['$scope', '$rootScope', 'AuthService', function($scope, $rootScope, AuthService) {

	$scope.register = function () {
		var user = {
			email: $scope.email,
			password: $scope.password
		};

		AuthService.register(user).then(function(response) {
			$rootScope.user = response.data;
		});
	};

	$scope.logout = function () {
		$rootScope.user = null;
	};


}]);