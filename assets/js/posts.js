$(function () {
    //当前页码
    var pagenum = 1
    //每页显示的记录数
    var pagesize = 2
    //发起ajax请求,请求所有文章数据
    init({});
    //实现用户数据的筛选
    $('.btn-search').on('click', function (e) {
        e.preventDefault()
        var query = {}
        //判断用户有没有选择指定的筛选条件
        if ($('.cateSelector').val() != 'all') {
            query.cate = $('.cateSelector').val()
        }
        if ($('.statuSelector').val() != 'all') {
            query.statu = $('.statuSelector').val()
        }
        // 发起请求
        init(query)
    });
    //使用一个自调用函数来实现数据的加载
    (function () {
        $.ajax({
            url: "/getAllCateList",
            type: 'get',
            success: function (res) {
                //生成分页数据的动态结构
                var html = '<option value="all">所有分类</option>'
                for (var i = 0; i < res.data.length; i++) {
                    html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $('.cateSelector').html(html)
            }
        })
    })()
    //数据初始化
    function init(query) {
        $.ajax({
            type: 'get',
            url: '/getPostList',
            data: {
                pagenum: pagenum,
                pagesize: pagesize,
                //展开运算符:可以将一个对象的具体的属性进行展开,展开为一组一组的键值对
                ...query
            },
            dataType: 'json',
            success: function (res) {
                console.log(res)
                //生成文章数据结构
                var html = template('postListTemp', res.data)
                $('tbody').html(html)
                //生成分页结构
                setPage(Math.ceil(res.data.total / pagesize))
            }
        })
    }
    //实现分页
    function setPage(count) {

        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3, //版本

            currentPage: pagenum, //显示第几页

            totalPages: count, //所有数据可以显示的页数

            onPageClicked: function (event, originalEvent, type, page) {
                console.log(page)
                //我们发现,这个page是当前合理的页码值,我们只需把当前的pagenum充值并获取数据即可
                pagenum = page
                init()

            }

        })

    }
    //使用事件委托的方式来实现文章数据的删除
    $('tbody').on('click', '.btndel', function () {
        if (window.confirm('请问你是否真的需要删除?')) {

            //获取id
            var id = $(this).data('id')
            $.ajax({
                type: 'get',
                url: 'delPostsById',
                data: { id: id },
                success: (res) => {
                    console.log(res)
                    init(query)
                }
            })
        }
    })
})