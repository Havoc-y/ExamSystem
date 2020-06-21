var topics = require('../models/topics')

module.exports = {
    /**
     * 
     * @param {试题内容} model 
     * 添加试卷 tpid不为0
     */
    addTopic: function (model) {
        return topics.create(model)
    },
    /**
     * 
     * @param {试卷id} topicid 
     * 删除试题
     */
    deleteTopic: function (topicid) {
        return topics.destroy({ where: { topicid: topicid } })
    },
    /**
     * 
     * @param {试卷id} topicid 
     * 根据试卷id查找相关题目
     */
    findTopicsByTopicid: function (topicid) {
        return topics.findAll({
            where: {
                'topicid': topicid
            }
        })
    }
}