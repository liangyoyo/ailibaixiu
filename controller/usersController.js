//引入模板引擎
const fs = require('fs')
//读取前台页面
module.exports.getIndexPage = (req, res) => {
    res.render('index.ejs')
}
module.exports.getDetailPage = (req, res) => {
    /*    fs.readFile(__dirname + "/../views/detail.ejs", (err, data) => {
           if (err) {
               console.log(err)
               res.end(404)
           } else {
               res.end(data)
           }
       }
       ) */
    res.render('views/detail.ejs')
}
module.exports.getListPage = (req, res) => {
    res.render('views/list.ejs')
}
module.exports.getAdminPage = (req, res) => {
    res.render('admin/index.ejs')
}
module.exports.getCategoriesPage = (req, res) => {
    res.render('admin/categories.ejs')
}
module.exports.getCommentsPage = (req, res) => {
    res.render('admin/comments.ejs')
}
module.exports.getLoginPage = (req, res) => {
    res.render('admin/login.ejs')
}
module.exports.getNavMenusPage = (req, res) => {
    res.render('admin/nav-menus.ejs')
}
module.exports.getPasswordResetPage = (req, res) => {
    res.render('admin/password-reset.ejs')
}
module.exports.getPostAddPage = (req, res) => {
    res.render('admin/post-add.ejs')
}
module.exports.getPostsPage = (req, res) => {
    res.render('admin/posts.ejs')
}
module.exports.getProfilePage = (req, res) => {
    res.render('admin/profile.ejs')
}
module.exports.getSettingsPage = (req, res) => {
    res.render('admin/settings.ejs')
}
module.exports.getSlidesPage = (req, res) => {
    res.render('admin/slides.ejs')
}
module.exports.getUsersPage = (req, res) => {
    res.render('admin/users.ejs')
}
