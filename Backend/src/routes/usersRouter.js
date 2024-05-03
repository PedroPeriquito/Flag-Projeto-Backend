const router = require('express').Router();
const usersController = require('../controllers/usersController');


router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.postUser);
router.put('/:id', usersController.putUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;
