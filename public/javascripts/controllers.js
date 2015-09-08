//declare a module
angular.module('FourSquareApp')

.controller('MainCtrl', [ 'PlacesService', function(PlacesService) {
	
	var self = this;

	self.filterVenue = "";
	
	self.browsePlaces = function() {
		PlacesService
				.browsePlaces(self.filterVenue)
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
	
	self.browsePlaces();

} ]);
