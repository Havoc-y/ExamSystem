var topicalls = require('../models/topicalls')

module.exports = {
    /**
     * 查询所有试卷
     * param：pagenum:当前页,pagesize:每页显示的数量
     */
    findTopicall: function (pagenum) {
        // 查找所有试卷
        let offset = (pagenum - 1) * 8
        return topicalls.findAll({
            // 每页显示的数量
            limit:8,
            // 去掉之前多少个数据
            offset
        });
    }
}