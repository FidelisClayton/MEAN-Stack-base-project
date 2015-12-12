module.exports = function(app){
	var Customer = app.models.customer;
	var controller = {};

	controller.getCustomers = function(req, res){
		Customer.find().exec()
			.then(function(customers){
				res.status(200).send(customers);
			}, function(error){
				res.status(500).send(error);
			});
	};

	controller.postCustomer = function(req, res) {
		req.body.age = Number(req.body.age);
		Customer.create(req.body)
			.then(function() {				
				res.status(201).send({mensagem:"Criado com sucesso."});
			},function(error) {
				console.log(error);
				res.status(500).send(error);
			});
	};

	controller.getCustomerById = function(req, res) {
		Customer.findOne({_id: req.params.id}).exec()
			.then(function(customer) {
				res.status(200).send(customer);
			}, function(error) {
				res.status(500).send(error);
			});
	};

	controller.putCustomer = function(req, res) {
		Customer.findByIdAndUpdate(req.params.id , req.body).exec()
			.then(function(customer) {
				res.status(200).send(customer);
			}, function(error) {
				res.status(500).send(error);
			});
	};

	controller.deleteCustomer = function(req, res){
		Customer.remove({_id: req.params.id}).exec()
			.then(function(){
				res.status(200).send({mensagem:"Deletado com sucesso."});
			}, function(error){
				res.status(500).send(error);
			});
	};
	
	return controller;
}