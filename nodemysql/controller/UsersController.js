var Users = require('../models/users');

module.exports = {
    login: async function (req, res, next) {
        var list = await Users.findAll();
        res.send({
            'username': req.body.username,
            'password': req.body.password,
            'list': list,
            'meta': {
                'status': res.statusCode,
                'msg': '操作成功'
            }
        });
    }
}