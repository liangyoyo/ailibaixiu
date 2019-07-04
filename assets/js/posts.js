$(function () {
    var pagenum = 1
    var pagesize = 2

    init()
    function init() {
        $.ajax({
            type: 'get',
            url: '/getPostList',
            data: {
                pagenum: pagenum,
                pagesize: pagesize,
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
    function setPage(count) {

        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3, //版本

            currentPage: 1, //当前页数

            numberOfPages: pagenum, //最多显示Page页

            totalPages: count, //所有数据可以显示的页数

            onPageClicked: function (event, originalEvent, type, page) {
                console.log(page)
                //我们发现,这个page是当前合理的页码值,我们只需把当前的pagenum充值并获取数据即可
                pagenum = page
                init()

            }

        })

    }
})