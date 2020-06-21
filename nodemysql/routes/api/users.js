var express = require('express');
var router = express.Router();
var usersController = require('../../controller/UsersController')

/* 用户登录 */
router.post('/api/login', function (req, res, next) {
  usersController.login(req, res, next);
});

/* 用户注册 */
router.put('/api/regist', function (req, res, next) {
  usersController.regist(req, res, next);
});

module.exports = router;
