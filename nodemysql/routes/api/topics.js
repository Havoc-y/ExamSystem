var express = require('express');
var router = express.Router();
var topicsController = require('../../controller/TopicsController')

/* 添加试题 */
router.put('/api/addTopic', function (req, res, next) {
    topicsController.addTopic(req, res, next);
})

/* 删除试题 */
router.delete('/api/deleteTopic', function (req, res, next) {
    topicsController.deleteTopic(req, res, next);
})

/* 根据试卷id查找题目 */
router.get('/api/findTopicsByTopicid',function(req,res,next){
    topicsController.findTopicsByTopicid(req,res,next);
})
module.exports = router;