var mysql = require('../config/mysqlConfig');
var sequelize = require('sequelize');

var topicsModel = mysql.define('topics', {
    tpid: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autolncrement: true,
        comment: '题目id'
    },
    topicid: {
        type: sequelize.INTEGER,
        comment: '试卷id'
    },
    tpname: {
        type: sequelize.STRING,
    },
    tpA: {
        type: sequelize.STRING
    },
    tpB: {
        type: sequelize.STRING
    },
    tpC: {
        type: sequelize.STRING
    },
    tpD: {
        type: sequelize.STRING
    },
    tpAnswer: {
        type: sequelize.STRING
    },
    tpAnalysis: {
        type: sequelize.TEXT
    },
},
    {
        timestamps: false
    })
// topicsModel.sync({
//     force: true
// })
module.exports = topicsModel