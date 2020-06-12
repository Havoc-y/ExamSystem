var express = require('express');
var router = express.Router();
var usersController = require('../../controller/UsersController')

/* GET users listing. */
router.post('/api/login', function (req, res, next) {
  usersController.login(req, res, next);
});

router.put('/api/regist', function (req, res, next) {
  usersController.regist(req, res, next);
});

module.exports = router;
