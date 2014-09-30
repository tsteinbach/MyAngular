/**
 * @author Bieberbau
 */

(function () {
   "use strict";

   /**
    * @constructor
    */
   function tganService($http) {
      this.getTendenzData = function () {
          return $http.get("Scripts/service/data/tendenz.json").then(function(response){
        	return response.data;
        });
      };
   }

   angular.module("tganStatistics").service("tganService", tganService);

})();