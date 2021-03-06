/**
 * 数据库配置
 */
var sequelize = require('sequelize');

var mysqlConn = new sequelize("examsystem", "root", "123456", {
    host: "localhost",
    port: "3306",
    dialect: 'mysql',
    pool: {   //连接池设置
        max: 5, //最大连接数
        min: 0, //最小连接数
        idle: 10000
    }
});

module.exports = mysqlConn;