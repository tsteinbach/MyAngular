/**
 * @author Bieberbau
 */
var tgan = angular.module("tganStatistics", ['ngRoute']);

// configure our routes
	tgan.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the tendency page
			.when('/', {
				templateUrl : 'tganPages/tendency.html',
				controller  : 'tganTendencyController'
			})
			
			// route for the echte Bank page
			.when('/echteBank', {
				templateUrl : 'tganPages/echteBank.html',
				controller  : 'tganEchteBankController'
			});
			
	// use the HTML5 History API
		$locationProvider.html5Mode(true);
			
	});