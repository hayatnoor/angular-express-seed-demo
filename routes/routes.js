var express = require('express');
var router = express.Router();
var Users = require('../controllers/users.js');
var Auth = require('../controllers/auth.js');


// register
router.post('/api/register', Auth.register);

// login
router.post('/api/login', Auth.login);





// gets all users
router.get('/api/users', Users.getUsers);

// gets one user
router.get('/api/user', Users.getUser);

module.exports = router;