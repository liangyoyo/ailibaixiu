//引入数据库
const mysql = require('mysql')
//创建链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings: true

})
//获取文章数据

exports.getPostList = (params, callback) => {
    //创建sql语句
    var sql = `select posts.id pid,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    where 1=1`


    //根据判断条件拼接筛选条件
    if (params.cate) {
        sql += ` and posts.category_id = ${params.cate}`
    }
    if (params.statu) {
        sql += ` and posts.status = '${params.statu}'`
    }
    sql += ` order by posts.id desc 
    limit ${(params.pagenum - 1) * params.pagesize}, ${params.pagesize} `

    console.log(sql);
    connection.query(sql, (err, results) => {
        console.log(err);
        if (err) {
            callback(err)
        } else {
            //获取sql表中的总记录条数
            sql = `select count(*) cnt from posts`
            connection.query(sql, (err1, data1) => {
                if (err1) {
                    callback(err1)
                } else {
                    //我们又需要返回查询出来的数据,雨需要返回查询出来总的记录数
                    callback(null, { data: results, total: data1[0].cnt })
                }
            })
        }
    })
}
exports.delPostsById = (id, callback) => {
    var sql = 'delete from posts where id = ' + id
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}