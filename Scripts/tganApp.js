/**
 * @author Bieberbau
 */
var mod = angular.module("demo", ['ngRoute']);

// configure our routes
	mod.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'tganPages/tendency.html',
				controller  : 'tganTendencyController'
			});

	// use the HTML5 History API
		$locationProvider.html5Mode(true);
			
	});