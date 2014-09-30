/**
 * @author Bieberbau
 */
mod.service('addressService', function ($http) {
	
	//simply returns the contacts list
    this.getAddresses = function () {
        return $http.get("Scripts/service/data/address.json").then(function(response){
        	return response.data;
        });
    };
	
});