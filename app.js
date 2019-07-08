// 1.引入express
const express = require('express')
// 引入路由模块
const router = require('./router/index.js')
// 引入ejs
const ejs = require('ejs')
//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
const querystring = require('querystring')
//引入bodyparse模块
var bodyParser = require('body-parser')
//引入第三方session模块
var session = require('express-session');

// 2.创建应用
const app = express()
// 3.添加对指定端口的监听
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})

// 设置模板引擎为ejs
app.set('view engine', 'ejs')
// 指定模板文件的目录 ，后期使用ejs的时候就可以参照这个目录进行ejs文件查询
app.set('views', 'views')
// 添加body-parser的配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 让app应用使用session的方式来进行状态保持
app.use(session({
    //name: 'hhw',
    // 对session加密：加盐，可以设置一个只有你自己知道的字符串
    //  md5加密
    secret: '加什么都没有所谓',
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false,
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: false,

}))

// 4.添加静态资源的托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
//设置路由中间件进行session数据的判断
app.use(function (req, res, next) {
    if (req.session.islogin && req.session.islogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        res.redirect('/admin/login')
    }
})

// 5.添加路由配置
// use:让app应用来使用这个路由进行所有的用户请求的路由管理,这个views目录 是相对于根目录 而言
app.use(router)