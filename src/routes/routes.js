const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/usuario', UserController.Insert);

module.exports = router;