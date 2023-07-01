const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');
const {authMdw} = require('../middleware');

router.post('/',userController.createUser);
router.post('/:userId', authMdw.userIsAdminMDW, userController.deleteUser);
router.get('/', authMdw.userIsAdminMDW, userController.getAllUser);
router.get('/:userId', authMdw.userIsAdminMDW, userController.findUserByPK);
router.put('/:userId', authMdw.userIsAdminMDW, userController.updateUser);

module.exports = router;