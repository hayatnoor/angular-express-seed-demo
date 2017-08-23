var express = require('express');
var router = express.Router();
var Users = require('../controllers/users.js');


// gets all users
router.get('/api/users', Users.getUsers);

// gets one user
router.get('/api/user', Users.getUser);

module.exports = router;