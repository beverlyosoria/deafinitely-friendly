const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
	getAllReviews,
	create
};

function getAllReviews(req, res) {
	console.log(req.body);
	Post.findById(req.body.postId)
		.then((post) => {
			console.log(post);
			res.status(200).json(post);
		})
		.catch((err) => console.log(err));
	//   Post.find({})
	//       .then(posts => {
	//         res.status(200).json(posts);
	//       })
	//       .catch(err => console.log(err));
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
