//引入module模块
const cateModule = require('../modules/cateModule.js')
module.exports.getAllCateList = (req, res) => {
    cateModule.getAllCateList = (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                code: 400,
                msg: "查询数据失败"
            })
        } else {
            res.json({
                code: 200,
                msg: "查询数据成功",
                data: data
            })
        }
    }
}