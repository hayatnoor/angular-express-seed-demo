var app = angular.module('seed', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'assets/app/views/home.html'
		})
		.when('/users', {
			templateUrl : 'assets/app/views/users/all.html',
			controller: 'UserCtrl'
		})
		.when('/user', {
			templateUrl : 'assets/app/views/users/user.html',
			controller: 'UserCtrl'
		});
}]);