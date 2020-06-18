var topicallDao = require('../dao/TopicallDao');


module.exports = {
    findTopicall: async function (req, res, next) {
        let { pagenum } = req.query;
        console.log(pagenum)
        var list = await topicallDao.findTopicall(pagenum);
        if (!list) {
            return res.status(422).send({
                'meta': {
                    'status': res.statusCode,
                    'msg': '没有试卷，请添加'
                }
            })
        }
        return res.send({
            'list': list
        });
    }
}