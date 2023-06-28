const express = require('express');
const router = express.Router();
const {libraryController} = require('../controllers');


router.post('/',libraryController.createLibrary);
router.get('/',libraryController.getLibrariesAndAllBooks);
router.get('/:libraryId', libraryController.getAllBooksByCriteriaLibrary);
router.post('/:libraryId', libraryController.deletLibrery)
router.post('/:libraryId/book',libraryController.addNewBook)
router.put('/:libraryId',libraryController.updateLibrary)

module.exports = router;