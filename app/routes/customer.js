module.exports = function(app) {
	var controller = app.controllers.customer;

	app.route("/customers")
		.get(controller.getCustomers)
		.post(controller.postCustomer);
		
	app.route("/customer/:id")
		.get(controller.getCustomerById)
		.put(controller.putCustomer)
		.delete(controller.deleteCustomer);
}