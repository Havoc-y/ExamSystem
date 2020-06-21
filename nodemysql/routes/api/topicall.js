var express = require('express');
var router = express.Router();
var topicallController = require('../../controller/TopicallController')

/* 查找试卷总数 */
router.get('/api/findTopicAllMaxId', function (req, res, next) {
    topicallController.findTopicAllMaxId(req, res, next);
})

/* 分页查找 */
router.get('/api/findTopicall', function (req, res, next) {
    topicallController.findTopicall(req, res, next);
})

/* 添加试卷 */
router.put('/api/createTopicAll', function (req, res, next) {
    topicallController.createTopicAll(req, res, next);
})

/* 删除试卷 */
router.delete('/api/deleteTopicAllById', function (req, res, next) {
    topicallController.deleteTopicAllById(req, res, next);
})

module.exports = router;