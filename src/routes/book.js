const express = require('express');
const router = express.Router();
const {bookController} = require('../controllers');
const {authMdw} = require('../middleware');

router.post('/', authMdw.userIsAdminMDW, bookController.createBook);
router.get('/:bookId', authMdw.jwtValidMDW, bookController.findBookByPK);
router.get('/', authMdw.jwtValidMDW, bookController.getAllBook);
router.delete('/:bookId', authMdw.userIsAdminMDW  , bookController.deleteBook);
router.put('/:bookId', authMdw.userIsAdminMDW , bookController.updateBook);

module.exports = router;