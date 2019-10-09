const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
	getAllReviews,
	create
};

function getAllReviews(req, res) {
	//   Post.find({})
	//       .then(posts => {
	//         res.status(200).json(posts);
	//       })
	//       .catch(err => console.log(err));
}

function create(req, res) {
	// console.log(req.body);
	// const post = new Post(req.body);
	// post.save(function() {
	//     res.status(201).json(post);
	// })
}
