const router = require('express').Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/', reviewsController.getReviews);
router.get('/:id', reviewsController.getReviewById);
router.post('/:idTMDB/:idUser', reviewsController.postReview);

module.exports = router;
