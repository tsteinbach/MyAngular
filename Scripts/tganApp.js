/**
 * @author Bieberbau
 */
var tgan = angular.module("tganStatistics", ['ngRoute']);

// configure our routes
	tgan.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'tganPages/tendency.html',
				controller  : 'tganTendencyController'
			});

	// use the HTML5 History API
		$locationProvider.html5Mode(true);
			
	});