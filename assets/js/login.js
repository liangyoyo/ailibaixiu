/* 前台页面处理

- 添加登陆事件
- 收集用户数据:$().serialize()
- 发起ajax请求
- 给出用户提示或者页面跳转 */


//给按钮添加点击事件
$('.btnlogin').on('click', function () {
    var email = $('[name=email]').val()
    var password = $('[name=password]').val()
    console.log(email, password)
    $.ajax({
        type: 'post',
        url: '/login',
        //在$.ajax请求中的beforeSend方法中把提交按钮禁用掉，等到Ajax请求执行完毕，在恢复按钮的可用状态。
        beforeSend: function () {
            if (!/\w+[@]\w+[.]\w+/.test(email)) {
                $('.alert-danger > span').text('请输入合法的电子邮箱')
                $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                return false
            }
            if (password.trim().length == 0) {
                $('.alert-danger > span').text('请输入密码')
                $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                return false
            }
        },
        data: $('.loginform').serialize(),
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                location.href = "/admin/posts"
                console.log(res)
            } else {
                $('.alert-danger > span').text(res.msg)
                console.log(123)
                console.log(res)
                $('.alert-danger').fadeIn(500).delay(2000).fadeOut(2000)
            }
        }

    })
    console.log($('.loginform').serialize())
})