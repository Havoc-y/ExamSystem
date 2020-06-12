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
            // var valid = require('bcrypt').compareSync(password, list.password)
            // if (!valid) {
            //     return res.status(422).send({
            //         'meta': {
            //             'status': res.statusCode,
            //             'msg': '用户名或密码错误'
            //         }
            //     })
            // }
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
        let salt = bcrypt.genSaltSync(10);
        let { username, password, identify } = req.body;
        // 对密码进行加密
        var hash = bcrypt.hashSync(password, salt);
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
        await Users.addUserInfo(username, hash, identify);
    }
}