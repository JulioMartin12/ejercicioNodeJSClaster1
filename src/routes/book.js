const express = require('express');
const router = express.Router();
const {bookController} = require('../controllers');

router.post('/',bookController.createBook);
router.put('/:idBook',bookController.updateBook);

module.exports = router;