var topicsDao = require('../dao/TopicsDao')

module.exports = {
    /* 添加试题 */
    addTopic: async function (req, res, next) {
        let model = req.body;
        await topicsDao.addTopic(model).then(function (result) {
            return res.send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '添加成功'
                }
            });
        }).catch(function (err) {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '添加失败'
                }
            })
        });
    },
    /* 删除试题 */
    deleteTopic: async function (req, res, next) {
        let topicid = req.body.topicid;
        console.log(topicid)
        let flag = await topicsDao.deleteTopic(topicid)
        if (flag) {
            return res.send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '删除成功'
                }
            })
        } else {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '删除失败'
                }
            })
        }
    },
    /* 根据试卷id查找题目 */
    findTopicsByTopicid: async function (req, res, next) {
        let { topicid } = req.query;
        let list = await topicsDao.findTopicsByTopicid(topicid)
        if (list) {
            return res.send({
                'list': list,
                'meta': {
                    'status': res.statusCode,
                    'msg': '查找成功'
                }
            })
        } else {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '查找失败'
                }
            })
        }
    }
}