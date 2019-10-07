const express = require('express');
const router = express.Router();
const Posts = require('../../models/post');
const postsCtrl = require('../../controllers/posts');

/*---------- Public Routes ----------*/
router.post('/create', postsCtrl.create);


/*---------- Protected Routes ----------*/



module.exports = router;