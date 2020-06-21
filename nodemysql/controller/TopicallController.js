var topicallDao = require('../dao/TopicallDao');


module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     * 试卷总数
     */
    findTopicAllMaxId: async function (req, res, next) {
        var total = await topicallDao.findTopicAllMaxId();
        return res.send({
            'total': total.topicid
        });
    },
        /**
         * 
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         * 分页查找
         */
        findTopicall: async function (req, res, next) {
            let { pagenum } = req.query;
            console.log(pagenum)
            var list = await topicallDao.findTopicall(pagenum);
            var total = await topicallDao.findTopicTotal();
            console.log(total);
            if (!list) {
                return res.status(422).send({
                    'meta': {
                        'status': res.statusCode,
                        'msg': '没有试卷，请添加'
                    }
                })
            }
            return res.send({
                'list': list,
                'total': total
            });
        },
        /**
         * 
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         * 添加数据
         */
        createTopicAll: function (req, res, next) {
            let model = req.body;
            console.log(model);
            topicallDao.createTopicAll(model).then(function (result) {
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
        /**
         * 
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         * 根据试卷id删除试卷
         */
        deleteTopicAllById: function (req, res, next) {
            let topicid = req.body.topicid;
            console.log(topicid)
            topicallDao.deleteTopicAllById(topicid).then(function (result) {
                return res.send({
                    'meta': {
                        'status': res.statusCode,
                        'msg': '删除成功'
                    }
                });
            }).catch(function (err) {
                return res.status(422).send({
                    'meta': {
                        'status': res.statusCode,
                        'msg': '删除失败'
                    }
                })
            });
        }
    }