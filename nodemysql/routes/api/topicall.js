var express = require('express');
var router = express.Router();
var topicallController = require('../../controller/TopicallController')

/* GET users listing. */
router.get('/api/topicall',function(req,res,next){
    topicallController.findTopicall(req,res,next);
})

module.exports = router;