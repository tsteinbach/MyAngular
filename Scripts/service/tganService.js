/**
 * @author Bieberbau
 */

(function() {
	"use strict";

	/**
	 * @constructor
	 */
	function tganService($http) {
		this.getTendenzData = function() {
			return $http.get("Scripts/service/data/tendenz.json").then(function(response) {
				return response.data;
			});
		};

		this.getEchteBankData = function() {
			return $http.get("Scripts/service/data/echteBankCount.json").then(function(response) {
				return response.data;
			});
		};
		
		this.getUnechteBankData = function() {
			return $http.get("Scripts/service/data/unechteBankCount.json").then(function(response) {
				return response.data;
			});
		};
		
		this.getNeunerTippData = function() {
			return $http.get("Scripts/service/data/neunerGount.json").then(function(response) {
				return response.data;
			}).catch(function(e){
				   var res = e;
				});
		};
	}


	angular.module("tganStatistics").service("tganService", tganService);

})(); 