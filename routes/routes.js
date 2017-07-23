var express = require('express');
var router = express.Router();
var Users = require('../controllers/users.js');


// gets all users
router.get('/users', Users.getUsers);

// gets one user
router.get('/user', Users.getUser);

module.exports = router;