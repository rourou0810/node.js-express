var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var tipSQL = require('../db/tipSQL');


/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.username){
        res.render('main',{username:req.session.username});
    }else{
    	res.redirect('/');
    }
});
router.get('/tip', function(req, res, next) {
    if(req.session.username){
        res.render('tip',{username:req.session.username});
    }else{
    	res.redirect('/');
    }
});
router.post('/getTipList', function(req, res, next) {
	//链接数据库
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
 	connection.query(tipSQL.queryAll,function (err, result) {
        if(err) {      
             msg = {   
                code: 0,   
                data:'获取失败！'
             };
        }else{
        	msg = {   
                code: 1,   
                data:result
             }; 
        }
       // 以json形式，把操作结果返回给前台页面     
       res.json(msg);
       // 释放连接  
	   connection.end();
	});
});

router.post('/addTip', function(req, res, next) {
    //链接数据库
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
	// 获取前台页面传过来的参数  
 	var param = req.body;
 	if(param.id == "") {
 		connection.query(tipSQL.insertTip,[param.tipname],function (err, result) {
	        if(err) {      
	             msg = {   
	                code: 0,   
	                data:'添加失败！'
	             };
	        }else{
	        	msg = {   
	                code: 1,   
	                data:'添加成功！'
	             }; 
	        }
	       // 以json形式，把操作结果返回给前台页面     
	       res.json(msg);
	       // 释放连接  
		   connection.end();
		});
 	}else{
 		var connection = mysql.createConnection(dbConfig);
		connection.connect();
	 	var param = req.body;
	 	connection.query(tipSQL.updateTip,[param.tipname,param.id],function (err, result) {
	        if(err) {      
	             msg = {   
	                code: 0,   
	                data:'更新失败！'
	             };
	        }else{
	        	msg = {   
	                code: 1,   
	                data:'更新成功！'
	             }; 
	        }
	       // 以json形式，把操作结果返回给前台页面     
	       res.json(msg);
	       // 释放连接  
		   connection.end();
		});
 	}
 	
});

router.post('/deletTip', function(req, res, next) {
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
 	var param = req.body;
 	connection.query(tipSQL.deleteTipById,[param.id],function (err, result) {
        if(err) {      
             msg = {   
                code: 0,   
                data:'删除失败！'
             };
        }else{
        	msg = {   
                code: 1,   
                data:'删除成功！'
             }; 
        }
       // 以json形式，把操作结果返回给前台页面     
       res.json(msg);
       // 释放连接  
	   connection.end();
	});
});



module.exports = router;
