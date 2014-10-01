/**
 * @author Bieberbau
 */


tgan.controller("tganNeunerTippController", function tganNeunerTippController($scope,tganService) {
   "use strict";

	tganService.getNeunerTippData().then(function (userData) {
         $scope.names = userData;
      });
				
});