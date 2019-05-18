const categorydb = require('../model/categorydb.js')
module.exports = {
    // 直接返回 categories 页面
    categories: (req, res) => {
        res.render('categories', {})
    },
    // 得到所有的分类数据
    getAllData: (req, res) => {
        // 执行sql
        let selSql = `SELECT * FROM categories`
        // 如果执行查询数据时出错了，也应该将错误信息返回给浏览器
        categorydb.query(selSql, (err, result) => {
            // 如果 err 存在说明，出错误了，返回出错信息
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })
            }
            res.send({
                status: 200,
                msg: '查询成功',
                data: result
            })
        })
    },
    addCategories:(req,res)=>{
        let params = req.body
        let addSql = `INSERT INTO categories (slug, name) VALUES ("${params.slug}","${params.name}")`
        console.log(addSql);
        
        categorydb.query(addSql,(err,result)=>{
            if(err){
                return res.send({
                    status:400,
                    msg:"出错了"
                })
            }
            res.send({
                status:200,
                msg:"提交成功"
            })
        })
    },
    delCategories:(req,res)=>{
        let id = req.query.id;
        let delSql = `DELETE FROM categories WHERE id=${id}`
        console.log(delSql);
        categorydb.query(delSql,(err,result)=>{
            if(err){
                return res.send({
                    status:400,
                    msg:"出错了",
                })
            }
            res.send({
                status:200,
                msg:"删除成功"
            })
        })
    },
    Upcategories:(req,res)=>{
        let id = req.body.id;
        let  upSql = `SELECT * FROM categories WHERE id = ${id}`
        categorydb.query(upSql,(err,result)=>{
            if(err){
                return res.send({
                    status:400,
                    msg:"出错了"
                })
            }
            res.send({
                status:200,
                msg:"查询成功",
                data:result,
            })
        })
        
    }
}