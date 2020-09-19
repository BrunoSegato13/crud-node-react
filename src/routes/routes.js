const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/usuario', UserController.Insert);
router.get('/usuario', UserController.SearchAll);
router.get('/usuario/:id', UserController.SearchOne);
router.put('/usuario/:id', UserController.Update);
router.delete('/usuario/:id', UserController.Delete);


module.exports = router;