//declare a module
angular.module('FourSquareApp')

.controller('MainCtrl', [ 'PlacesService', function(PlacesService) {
	
	var self = this;

	self.helloWorld = "hello world";
	
	self.getConnectedUsers = function() {
		PlacesService
				.browsePlaces()
				.then(
						function(result) {
							if (result.data == 0) {
								self.errorMessage = "No Places";
							}
							self.places = result.data;
							return result;
						}, function(error) {

						})
	}
	
	self.getConnectedUsers();

} ]);
