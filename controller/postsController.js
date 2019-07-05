const postsModule = require('../modules/postsModule.js')
const cateModule = require('../modules/cateModule.js')
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
module.exports.delPostsById = (req, res) => {
    var id = req.query.id
    // 调用数据模块中的方法
    postsModule.delPostsById(id, (err) => {
        if (err) {
            res.json({
                code: 400,
                msg: '数据删除失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '数据删成功'
            })
        }
    })
}