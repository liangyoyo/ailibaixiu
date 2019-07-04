/* 获取url中的路由名称
- 获取dom元素，对路由进行判断，以便为元素添加相应的样式和设置对应的属性
- 为当前元素添加active样式：如何获取到当前样式
 - 为元素添加与路由名称相应的id属性
 - $('#'+routername)  */
//获取跳转过来的路由名称

//入口函数的作用，等待页面加载完毕，有一个独立的作用域
$(function () {
    var routername = itcast.getRouterName(location.href)
    //获取你想要操作的
    var menu_posts = $("#menu-posts");
    //判断路径
    if (routername == 'posts' || routername == 'post-add' || routername == 'categories') {
        //给menu_posts添加类
        menu_posts.addClass('in')
        //给menu_posts设置一个属性
        menu_posts.attr('aria-expanded', 'true')
    }
    var menu_settings = $('#menu-settings')

    if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') {
        //给menu_posts添加类
        menu_settings.addClass('in')
        //给menu_posts设置一个属性
        menu_settings.attr('aria-expanded', 'true')
    }
    // 添加active样式：排它法
    $('li').removeClass('active')
    // 获取当前被单击的元素：我得知道你当前你点击了那项菜单项
    // 所以我们为元素添加标识，而且这个标识需要和路由名称相关
    $('#' + routername).addClass('active')
})