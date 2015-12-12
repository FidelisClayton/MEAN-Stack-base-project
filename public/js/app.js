angular.module('Customers', ['ngRoute', 'ngMask']);
angular.module('Customers').config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	,	controller: 'CustomersCtrl'
	})
	.when('/customer/:id', {
		templateUrl: 'partials/customer.html'
	,	controller: 'CustomerCtrl'
	})
	.otherwise({redirectTo: '/'});
});