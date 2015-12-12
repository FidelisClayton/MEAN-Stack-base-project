angular.module('Customers').service('CustomersService', function($http){
	this.getCustomers = function(){
		return $http({
			method: 'GET'
		,	url: 'http://localhost:3000/customers'
		});
	};

	this.getCustomer = function(id){
		return $http({
			method: 'GET'
		,	url: 'http://localhost:3000/customer/' + id
		});
	};

	this.postCustomer = function(data){
		return $http({
			method: 'POST'
		,	url: 'http://localhost:3000/customers'
		, 	data: data
		});
	};
	
	this.putCustomer = function(id, data){
		return $http({
			method: 'PUT'
		,	url: 'http://localhost:3000/customer/' + id
		,	data: data
		});
	};

	this.deleteCustomer = function(id){
		return $http({
			method: 'DELETE'
		,	url: 'http://localhost:3000/customer/' + id
		});
	};
});