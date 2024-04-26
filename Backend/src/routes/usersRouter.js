const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/', usersController.postUser);

module.exports = router;
