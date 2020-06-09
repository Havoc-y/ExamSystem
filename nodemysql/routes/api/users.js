var express = require('express');
var router = express.Router();
var usersController = require('../../controller/UsersController')

/* GET users listing. */
router.post('/api/login', function(req, res, next) {
  usersController.login(req,res,next);
});

module.exports = router;
