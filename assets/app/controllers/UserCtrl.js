app.controller('UserCtrl', ['$scope', 'UserService', function($scope, UserService) {

	$scope.listAllUsers = function () {

		UserService.getUsers().then(function(response) {
			$scope.users = response.data;
		});

	};

	$scope.findUser = function () {

		UserService.getUser().then(function(response) {
			$scope.user = response.data;
		});

	};

}]);