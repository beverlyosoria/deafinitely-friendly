const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
	getAllReviews,
	create,
	delReview
};

function delReview(req, res) {
	console.log(req.body);
	let reviewId = req.body.reviewId;
	let postId = req.body.postId;
	Post.findById(postId, function(err, post) {
		post.reviews.splice(reviewId, 1);
		post.save(() => {
			res.status(201).json(post);
		});
	});
}

function getAllReviews(req, res) {
	Post.findById(req.body.postId)
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((err) => console.log(err));
}

function create(req, res) {
	Post.findById(req.body.postId)
		.then((post) => {
			post.reviews.push(req.body);
			post.save(() => {
				res.status(201).json(post);
			});
		})
		.catch((err) => console.log(err));
}
