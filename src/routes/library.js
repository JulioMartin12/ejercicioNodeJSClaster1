const express = require('express');
const router = express.Router();
const {libraryController} = require('../controllers');


router.post('/',libraryController.createLibrary);
router.get('/',libraryController.getLibrariesAndAllBooks);
router.get('/:libraryId', libraryController.getAllBooksByCriteriaLibrary);

module.exports = router;