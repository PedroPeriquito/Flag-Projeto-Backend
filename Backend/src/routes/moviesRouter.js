const router = require('express').Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovieById);
router.post('/', moviesController.postMovie);
router.put('/:id', moviesController.putMovie);
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
