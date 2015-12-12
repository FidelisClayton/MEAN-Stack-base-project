var mongoose = require("mongoose")
,	findOrCreate = require('mongoose-findorcreate');

module.exports = function() {
	var schema = mongoose.Schema({
		name: {type: String, required: true}
	,	phone: {type: String}
	,	age: {type: Number}
	});
	schema.plugin(findOrCreate);
	return mongoose.model("Customer",schema);
}