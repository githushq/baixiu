// 处理所有与分类路由相关的请求
const express = require('express')
const categoryContr = require('../controller/categoryContr.js')
const router = express.Router()

router.get('/categories', categoryContr.categories) // 添加一个 categories 路由
    .get('/getAllData', categoryContr.getAllData) // 添加一个 获取所有参数 的路由
    .post("/addCategories",categoryContr.addCategories)
    .get("/delCategories",categoryContr.delCategories)
    .post("/Upcategories",categoryContr.Upcategories)
// 暴露接收
module.exports = router