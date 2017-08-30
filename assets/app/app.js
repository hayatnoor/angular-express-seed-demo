var app = angular.module('seed', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'assets/app/views/home.html'
		})
		.when('/login', {
			templateUrl : 'assets/app/views/login.html',
			controller: 'AuthCtrl'
		})
		.when('/register', {
			templateUrl : 'assets/app/views/register.html',
			controller: 'AuthCtrl'
		})
		.when('/users', {
			templateUrl : 'assets/app/views/users/all.html',
			controller: 'UserCtrl'
		})
		.when('/user', {
			templateUrl : 'assets/app/views/users/user.html',
			controller: 'UserCtrl'
		});

	$locationProvider.html5Mode(true);
}]);