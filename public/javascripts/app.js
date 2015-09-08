$billingApp = angular.module('FourSquareApp', [ 'ngRoute', 'ui.bootstrap' ])
		.config(function($routeProvider) {

			$routeProvider.when('/home', {
				templateUrl : '/views/home.jade',
				controller : 'MainCtrl as mainCtrl',
			});

			$routeProvider.otherwise({
				redirectTo : '/home'
			});
			
		});
