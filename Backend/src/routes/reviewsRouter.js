const router = require('express').Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/', reviewsController.getReviews);
router.get('/:id', reviewsController.getReviewById);
router.get('/movie/:idTMDB', reviewsController.getReviewByMovieId);
router.post('/:idTMDBNum/:idUser', reviewsController.postReview);
router.put('/:id', reviewsController.putReview);
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
