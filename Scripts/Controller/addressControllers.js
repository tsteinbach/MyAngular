/**
 * @author Bieberbau
 */


mod.controller("addressController", function addressController($scope,addressService) {
   "use strict";

	addressService.getAddresses().then(function (addresses) {
         $scope.names = addresses;
      });
				
});