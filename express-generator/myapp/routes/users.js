var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var userSQL = require('../db/userSQL');

/* GET users listing. */
router.get('/admin-list', function(req, res, next) {
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
 	connection.query(userSQL.queryAll,function (err, result) {
        if(result.length != 0) {      
            if(req.session.username){
		        res.render('users/admin-list',{username:req.session.username,result:result});
		    }else{
		    	res.redirect('/');
		    }
        }
	    connection.end();
	});
});

module.exports = router;
