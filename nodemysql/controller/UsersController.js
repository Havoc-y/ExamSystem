var userDao = require('../dao/UserDao')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

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
            // 登陆成功创建token 根据jwt
            // jwt.sign(需要加密的数据，密文，有效期{expiresIn})
            var token = jwt.sign({ list }, 'Ysy')
            res.send({
                data:{
                    list:list,
                    token:token
                },
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
        // 对密码进行加密 salt:加密的等级 hash:加密后的密码
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        // 将处理后的数据通过userDao存进数据库
        // id在数据库中设置的是自动增长，所以传0即可
        await userDao.addUserInfo(0, username, hash, identify);
        res.send({
            'meta': {
                'status': res.statusCode,
                'msg': '注册成功'
            }
        });
    }
}