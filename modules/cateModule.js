//引入MySQL数据库
const mysql = require('mysql')
//进行数据库的链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings: true
})
//打开链接,会默认找到最近的数据库进行链接
exports.getAllCateList = (callback) => {
    var sql = 'select * from categories'
    connection.query = (sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null, results)
        }
    })
}