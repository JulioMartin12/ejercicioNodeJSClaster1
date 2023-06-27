const express = require('express');
const router = express.Router();
const {libraryController} = require('../controllers');


router.post('/',libraryController.createLibrary);
router.get('/',libraryController.getLibrariesAndAllBooks)

module.exports = router;