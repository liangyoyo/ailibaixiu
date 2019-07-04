const postsModule = require('../modules/postsModule.js')
const moment = require('moment')

module.exports.getPostList = (req, res) => {
    var obj = req.query
    postsModule.getPostList(obj, (err, data) => {
        console.log(err, data)
        if (err) {
            res.json({
                code: 400,
                msg: '数据查询失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            }

            )
        }
    })
}