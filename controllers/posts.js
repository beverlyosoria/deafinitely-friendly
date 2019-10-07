const Post = require('../models/post');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.body)
    const post = new Post(req.body);
    post.save(function() {
        res.status(201).json(post);
    })
 }
  