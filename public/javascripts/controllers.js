//declare a module
angular.module('FourSquareApp')

.controller('MainCtrl', [ 'PlacesService', function(PlacesService) {
	
	var self = this;
	self.helloWorld = "hello world";

} ]);
