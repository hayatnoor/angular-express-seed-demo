app.controller('UserCtrl', ['$scope', 'UserService', '$timeout', function($scope, UserService, $timeout) {

	$scope.listAllUsers = function () {

		UserService.getUsers().then(function(response) {
			// this is used to fake wait time
			$timeout(function () {
				$scope.users = response.data;
			}, 5000);

		});

	};

	$scope.findUser = function () {

		UserService.getUser().then(function(response) {
			$scope.user = response.data;
		});

	};

}]);