//封装获取路由名称的方法
var itcast = {
    //获取href中的路由名称
    getRouterName: (href) => {
        var index = href.indexOf('?')
        //定义一个变量来存储路由名称
        var routername = ''
        //判断是否有参数
        if (index == -1) {
            routername = href.substring(href.lastIndexOf('/') + 1)
        } else {
            indexOf
            routername = href.substring(href.lastIndexOf('/') + 1, href.indexOf('?'))
        }
        return routername
    }
}