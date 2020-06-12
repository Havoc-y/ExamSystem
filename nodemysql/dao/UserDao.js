var users = require('../models/users');

module.exports = {
    // 根据用户名查找用户信息
    findUserInfoByUsername: function (username) {
        return users.findOne({
            where: {
                'username': username
            }
        });
    },
    // 添加用户信息
    addUserInfo: function (username, password, identify) {
        return users.create({
            username: username,
            password: password,
            identify: identify
        })
    }
}