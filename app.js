//引入express框架
const express = require('express')

//创建引用
const app = express()
//引入路由模块
const router = require('./router/index.js')
//添加对指定端口的监听
app.listen(3000, () => {
    console.log('the server is running at http://127.0.0.1:3000')
})

//设置静态资源的托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

//添加路由配置
app.use(router)