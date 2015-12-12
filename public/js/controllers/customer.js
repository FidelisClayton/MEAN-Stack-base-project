angular.module('Customers').controller('CustomerCtrl', function($scope, $routeParams, CustomersService){

	$scope.getCustomer = function(){
		CustomersService.getCustomer($routeParams.id)
		.then(function(response){
			$scope.customer = response.data;
		}, function(response){
			console.log(response);
		});
	}
});