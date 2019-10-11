var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema(
	{
		content: String,
		rating: {
			type: Number,
			min: 1,
			max: 5
		},
		skills: [],

		user: []
	},
	{
		timestamps: true
	}
);

var postSchema = new Schema({
	name: {
		type: String
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	address: {
		type: String
	},
	reviews: [ reviewSchema ],
	user: []
});

module.exports = mongoose.model('Post', postSchema);
