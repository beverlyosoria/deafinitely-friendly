const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews');

router.post('/create', reviewCtrl.create);
router.post('/all', reviewCtrl.getAllReviews);

module.exports = router;
