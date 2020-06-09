/**
 * users表模型
 * id：用户id 唯一值 integer
 * username:用户名 String 不为空
 * password：用户密码 String 不为空
 * token：用户登录码 char(36)
 */
var mysql = require('../config/mysqlConfig');
var sequelize = require('sequelize');

var usersModel = mysql.define("users",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autolncrement:true,
        comment:'用户id'
    },
    username: {
        type: sequelize.STRING,
    },
    password: {
        type: sequelize.STRING
    },
    token: {
        type: sequelize.UUID
    }
},
{
    timestamps: false,
});

//同步:没有就新建,有就不变
// users.sync();
//先删除后同步
// usersModel.sync({
//     force: true
// });

module.exports = usersModel;