const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

/*---------- Public Routes ----------*/
router.post('/create', postsCtrl.create);
router.post('/all', postsCtrl.getAllPosts);

/*---------- Protected Routes ----------*/

module.exports = router;
