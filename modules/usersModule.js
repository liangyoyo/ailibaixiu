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
//打开链接, 会默认找到最近的数据库进行链接
exports.login = (email, callback) => {
    var sql = `SELECT * from users where email = '${email}'`
    connection.query(sql, (err, result) => {
        if (err) {
            callback(err)
        } else {
            // 查询最多能够查询到一条记录
            // result：查询返回结果集，它的类型是数组
            callback(null, result[0])
        }
    })
}