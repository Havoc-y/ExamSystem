var userDao = require('../dao/UserDao')
var bcrypt = require('bcryptjs')

module.exports = {
    // 登录
    login: async function (req, res, next) {
        let { username, password } = req.body;
        // 判断用户是否存在
        var list = await userDao.findUserInfoByUsername(username);
        if (!list) {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '该用户不存在，请先注册'
                }
            })
        } else {
            var valid = bcrypt.compareSync(password, list.password)
            if (!valid) {
                return res.status(422).send({
                    'meta': {
                        'status': res.statusCode,
                        'msg': '用户名或密码错误'
                    }
                })
            }
            res.send({
                'list': list,
                'meta': {
                    'status': res.statusCode,
                    'msg': '登陆成功'
                }
            });
        }
    },
    // 注册
    regist: async function (req, res, next) {
        let { username, password, identify } = req.body;
        // 判断用户是否已经注册
        var list = await userDao.findUserInfoByUsername(username);
        if (list) {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '该用户已经存在，请直接登录'
                }
            })
        }
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        await userDao.addUserInfo(0, username, hash, identify);
        res.send({
            'meta': {
                'status': res.statusCode,
                'msg': '注册成功'
            }
        });
    }
}