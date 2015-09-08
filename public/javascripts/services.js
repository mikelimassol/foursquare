angular
		.module('FourSquareApp')
		.factory(
				'PlacesService',
				[
						'$http',
						function($http) {
							return {
								browsePlaces : function(filterVenue) {
									return $http
											.get('https://api.foursquare.com/v2/venues/search?client_id=0WS3QY5H0C2KB2ZUKZAVNDN0HHPIBBMZYNDQHS5ABYQXU5UP&client_secret=JKSZAFGQRASCDBQMGLGRACLLTMNS14E4INUEBMWK2JJJZDXZ&v=20130815&ll=40.7,-74&q=Top%20Picks&near=' + filterVenue);
								},
							}
						} ]);