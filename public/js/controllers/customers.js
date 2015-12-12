angular.module('Customers').controller('CustomersCtrl', function($scope, $location,CustomersService){
	$scope.ui = {};

	$scope.getCustomers = function(){
		CustomersService.getCustomers()
		.then(function(response){
			$scope.customers = response.data;
		}, function(response){
			console.log(response.status);
		});
	};

	$scope.putCustomer = function(id, data){
		CustomersService.putCustomer(id, data)
		.then(function(response){
			$scope.ui.editando = false;
			$scope.customer = {};
			$scope.getCustomers();
		}, function(response){
			console.log(response);
		});
	};

	$scope.deleteCustomer = function(id){
		CustomersService.deleteCustomer(id)
		.then(function(response){
			$scope.getCustomers();
			console.log(response);
		}, function(response){
			console.log(response);
		});
	};

	$scope.postCustomer = function(data){
		CustomersService.postCustomer(data)
		.then(function(response){
			$scope.getCustomers();
			$scope.customer = {};
		}, function(response){
			console.log(response);
		});
	};

	$scope.toggleEditar = function(customer){
		$scope.ui.editando = true;
		$scope.customer = angular.copy(customer);
	};

	$scope.openCustomer = function(id){
		$location.path('/customer/' + id);
	} 
});