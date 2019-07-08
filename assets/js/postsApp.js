$(function () {
    //实现页面所有数据的加载
    $.ajax({
        type: 'get',
        url: '/getAllCateList',
        dataType: 'json',
        success: function (res) {
            // 生成分类数据的动态结构
            var html = ''
            for (var i = 0; i < res.data.length; i++) {
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(html)
        }
    })
    //初始化富文本框,创建一个富文本框覆盖指定id的treatarea
    CKEDITOR.replace('content')
    //保存文章数据,实现文章的新增
    $('.btnSave').on('click', function (e) {
        e.preventDefault()
        CKEDITOR.instances.content.updateElement()
        //同步数据:将富文本框中的数据与textarea中的数据进行同步,两者同步之后数据会一样
        //serialize可以获取表单中所有具有name属性的value值
        console.log($('.row').serialize())
        $.ajax({
            type: 'post',
            url: '/addPost',
            data: $('.row').serialize(),
            dataType: 'json',
            success: function (res) {
                console.log(res)
            }
        })

    })
    //实现文件的上传
    $('#feature').on('change', function () {
        // files:可以获取当前所有被选择文件对象，它是一个数组，里面的每一个值都是当前被选择的一个一个文件对象
        var myfile = document.querySelector('#feature').files[0]
        //通过formdata构造函数创建一个空对象
        var formdata = new FormData()
        //可以通过append来追加参数
        formdata.append('img', myfile)
        //发起ajax请求
        $.ajax({
            type: 'post',
            url: '/uploadsFile',
            data: formdata,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function (res) {
                console.log(res)
                if (res.code == 200) {
                    $('[name=feature]').val(res.img)
                    $('.thumbnail').attr('src', '/uploads/' + res.img).show()
                } else {

                }
            }
        })
    })
})