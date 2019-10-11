const Post = require('../models/post');

module.exports = {
	getAllPosts,
	create
};

function getAllPosts(req, res) {
	Post.find({})
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => console.log(err));
}

function create(req, res) {
	const post = new Post(req.body);
	post.save(function() {
		res.status(201).json(post);
	});
}
