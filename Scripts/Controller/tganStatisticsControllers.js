/**
 * @author Bieberbau
 */


mod.controller("tganStatisticsControllers", function tganStatisticsControllers($scope,tganService) {
   "use strict";

	tganService.getTendenzData().then(function (userData) {
         $scope.names = userData;
      });
				
});