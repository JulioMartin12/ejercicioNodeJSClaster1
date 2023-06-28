const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');

router.post('/',userController.createUser);
router.post('/:userId',userController.deleteUser);
router.get('/',userController.getAllUser);
router.get('/:userId',userController.findUserByPK);
router.put('/:userId',userController.updateUser);

module.exports = router;