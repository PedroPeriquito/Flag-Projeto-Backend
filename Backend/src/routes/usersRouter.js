const router = require('express').Router();
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');


router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.postUser);
router.put('/:id', usersController.putUser);
router.put('/changePassword/:id', authController.changePassword);
router.delete('/:id', usersController.deleteUser);


module.exports = router;
