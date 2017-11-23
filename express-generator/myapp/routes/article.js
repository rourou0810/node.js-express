var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/article-list', function(req, res, next) {
  	//res.render('article/article-list');
  	if(req.session.username){
	    res.render('article/article-list',{username:req.session.username});
	}else{
		res.redirect('/');
	}
});
router.get('/article-add', function(req, res, next) {
  //res.render('article/article-add');
  	if(req.session.username){
	    res.render('article/article-add',{username:req.session.username});
	}else{
		res.redirect('/');
	}
});

module.exports = router;
