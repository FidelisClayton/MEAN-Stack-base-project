var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.connect(uri);
}