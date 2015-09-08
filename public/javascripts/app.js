$billingApp = angular.module('FourSquareApp', [ 'ngRoute', 'ui.bootstrap' ])
		.config(function($routeProvider) {

			$routeProvider.when('/home', {
				templateUrl : '/templates/home',
				controller : 'MainCtrl as mainCtrl',
			});

			$routeProvider.otherwise({
				redirectTo : '/home'
			});
			
		});
