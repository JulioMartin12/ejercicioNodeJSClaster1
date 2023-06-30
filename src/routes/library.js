const express = require('express');
const router = express.Router();
const {libraryController} = require('../controllers');
const {authMdw} = require('../middleware');


router.post('/',authMdw.userIsAdminMDW,libraryController.createLibrary);
router.get('/',authMdw.jwtValidMDW, libraryController.getLibrariesAndAllBooks);
router.get('/:libraryId', authMdw.jwtValidMDW, libraryController.getAllBooksByCriteriaLibrary);
router.delete('/:libraryId', authMdw.userIsAdminMDW, libraryController.deletLibrery)
router.post('/:libraryId/book', authMdw.userIsAdminMDW, libraryController.addNewBook)
router.put('/:libraryId', authMdw.userIsAdminMDW, libraryController.updateLibrary)

module.exports = router;