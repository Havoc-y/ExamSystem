var Users = require('../models/users');

module.exports = {
    login: async function (req, res, next) {
        var list = await Users.findAll();
        res.send({
            'temp': req.query.userlist.username,
            'list': list,
            'meta': {
                'status': res.statusCode,
                'msg': '操作成功'
            }
        });
    }
}