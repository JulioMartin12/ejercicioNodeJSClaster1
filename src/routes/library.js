const express = require('express');
const router = express.Router();
const {libraryController} = require('../controllers');


router.post('/',libraryController.createLibrary);


module.exports = router;