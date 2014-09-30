/**
 * @author Bieberbau
 */
//var mod = angular.module("demo", []);

mod.controller("customersController", function customersController($scope,$http) {
   "use strict";


    $http.get("http://www.w3schools.com//website/Customers_sql.aspx")
  		.success(
  			function(response) 
  			{
  				$scope.names = response;
			});

});

