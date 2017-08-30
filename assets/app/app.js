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
			controller: 'UserCtrl',
			requiresLogin: true
		})
		.when('/user', {
			templateUrl : 'assets/app/views/users/user.html',
			controller: 'UserCtrl',
			requiresLogin: true
		});

	$locationProvider.html5Mode(true);
}]).run(['$rootScope', '$location', function($rootScope, $location) {
	// when the route change begins, see if the page requires login and check to see if the user object is populated
	$rootScope.$on('$routeChangeStart', function(event, next, current) {

		if (next && next.requiresLogin && !$rootScope.user) {
			$location.path('/');
		}

	});

}]);