var mysql = require('../config/mysqlConfig');
var sequelize = require('sequelize');

var topicallModel = mysql.define('topicalls', {
    topicid: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autolncrement: true,
        comment: '试卷id'
    },
    topicname:{
        type: sequelize.STRING,
    },
    topictype:{
        type: sequelize.STRING,
    },
},
{
    timestamps: false,
});

// topicallModel.sync({
//     force: true
// });

module.exports = topicallModel