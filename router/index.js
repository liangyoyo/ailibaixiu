//引入users表的控制器模块
const usersController = require('../controller/usersController')
const postsController = require('../controller/postsController')
const cateController = require('../controller/cateController')
const uploadsController = require('../controller/uploadsController')


const express = require('express')
const router = express.Router()
//添加路由句柄
//前台页面
router.get('/', usersController.getIndexPage)
    .get('/detail', usersController.getDetailPage)
    .get('/list', usersController.getListPage)

    // 后台管理页面，统一添加admin做为前缀
    .get('/admin', usersController.getAdminPage)
    .get('/admin/categories', usersController.getCategoriesPage)
    .get('/admin/comments', usersController.getCommentsPage)
    .get('/admin/login', usersController.getLoginPage)
    .get('/admin/nav-menus', usersController.getNavMenusPage)
    .get('/admin/password-reset', usersController.getPasswordResetPage)
    .get('/admin/post-add', usersController.getPostAddPage)
    .get('/admin/posts', usersController.getPostsPage)
    .get('/admin/profile', usersController.getProfilePage)
    .get('/admin/settings', usersController.getSettingsPage)
    .get('/admin/slides', usersController.getSlidesPage)
    .get('/admin/users', usersController.getUsersPage)
    //获取所有文章数据
    .get('/getPostList', postsController.getPostList)
    .get('/delPostsById', postsController.delPostsById)
    .post('/addPost', postsController.addPost)
    //获取所有分类数据
    .get('/getAllCateList', cateController.getAllCateList)

    //文件上传
    .post('/uploadsFile', uploadsController.uploadsFile)
    //添加用户登录路由
    .post('/login', usersController.login)

//向外暴露
module.exports = router
