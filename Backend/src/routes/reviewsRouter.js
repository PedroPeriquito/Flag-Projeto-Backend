const router = require('express').Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/', reviewsController.getReviews);
router.get('/:id', reviewsController.getReviewById);
router.get('/review/:idTMDB/:idUser', reviewsController.getReviewByMovieUserId);
router.get('/movie/:idTMDB', reviewsController.getReviewByMovieId);
router.get('/watched/:idUser', reviewsController.getReviewByWatched);
router.get('/plantowatch/:idUser', reviewsController.getReviewByPlanToWatch);
router.post('/', reviewsController.postReview);
router.put('/:id', reviewsController.putReview);
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
