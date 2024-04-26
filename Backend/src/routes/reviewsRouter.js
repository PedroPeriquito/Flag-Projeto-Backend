const router = require('express').Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/', reviewsController.getReviews);
router.get('/:id', reviewsController.getReviewById);
router.post('/', reviewsController.postReview);

module.exports = router;
