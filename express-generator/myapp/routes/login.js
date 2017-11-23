var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var userSQL = require('../db/userSQL');



/* GET home page. */
router.get('/', function(req, res, next) {
	   //delete req.session.username;
  	res.render('login');
});
router.post('/loginIn', function(req, res, next) {
    //链接数据库
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
	// 获取前台页面传过来的参数  
 	var param = req.body;
 	connection.query(userSQL.getUserByName,[param.username,param.pwd],function (err, result) {
        if(result.length != 0) {      
             result = {   
                code: 1,   
                msg:'登陆成功'
             };

             //存储session
             req.session.username = param.username;
        }else{
        	result = {   
                code: 0,   
                msg:'用户名或密码错误！'
             }; 
        }
       // 以json形式，把操作结果返回给前台页面     
       res.json(result);
       // 释放连接  
	   connection.end();
	});
});

module.exports = router;
