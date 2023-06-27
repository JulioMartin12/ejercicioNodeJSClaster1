const express = require('express');
const router = express.Router();
const {bookController} = require('../controllers');

router.post('/',bookController.createBook);
router.get('/:bookId',bookController.findBookByPK);
router.get('/',bookController.getAllBook);
router.post('/:bookId', bookController.deleteBook);
router.put('/:bookId',bookController.updateBook);
module.exports = router;