var topicalls = require('../models/topicalls');

module.exports = {
    /**
     * 分页查找
     * param：pagenum:当前页,pagesize:每页显示的数量
     */
    findTopicall: function (pagenum) {
        // 查找所有试卷
        let offset = (pagenum - 1) * 8
        return topicalls.findAll({
            order: [["topicid", "DESC"]],
            // 每页显示的数量
            limit: 8,
            // 去掉之前多少个数据
            offset
        });
    },
    /**
     * 查询所有试卷
     */
    findTopicTotal: function () {
        return topicalls.count()
    },
    /**
     * 添加试卷
     */
    createTopicAll: function (model) {
        return topicalls.create(model)
    },
    /**
     * 根据id删除试卷
     */
    deleteTopicAllById: function (topicid) {
        return topicalls.destroy({ where: { topicid: topicid } })
    },
    /**
     * 查找最大id
     */
    findTopicAllMaxId: function () {
        return topicalls.findOne({
            order: [["topicid", "DESC"]],
            limit: 1
        })
    }
}