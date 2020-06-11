var Users = require('../models/users');

module.exports = {
    login: async function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var list = await Users.findOne({
            where: {
                'username': username
            }
        });
        if (!list) {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '该用户不存在，请先注册'
                }
            })
        } else {
            var valid = require('bcrypt').compareSync(password,list.password)
            if(!valid){
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
    }
}