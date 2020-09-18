const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/usuario', UserController.Insert);
router.get('/usuario', UserController.SearchAll);
router.get('/usuario/:id', UserController.SearchOne);

module.exports = router;