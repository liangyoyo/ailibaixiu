//引入第三方模块
const formidable = require('formidable')
const path = require('path')
//实现文件的上传操作
module.exports.uploadsFile = (req, res) => {
    //创建一个文件上传对象
    var form = new formidable.IncomingForm()
    //设置表单域的编码方式
    form.encoding = 'utf-8'
    //设置文件的上传路径
    form.uploadDir = __dirname + '/../uploads'
    //设置保留文件的扩展名
    form.keepExtensions = true
    // 5.实现文件上传操作
    // form.parse(请求报文对象,上传完成时的回调函数)
    // 回调函数中有三个参数：
    // 1.err:错误优先的回调函数--错误信息
    // 2.fields:字段：传递的普通键值对，它是一个对象
    // 3.files:这是文件上传成功后的相关信息--如存储信息
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json({
                code: '400',
                msg: '文件上传失败'

            })
        } else {
            var filename = path.basename(files.img.path)
            res.json({
                code: '200',
                msg: '文件上传成功',
                img: filename

            })
        }
    })
}