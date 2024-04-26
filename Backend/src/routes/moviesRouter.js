const router = require('express').Router();
const moviesController = require('../controllers/moviesController');

router.post('/', moviesController.postMovie);

module.exports = router;
