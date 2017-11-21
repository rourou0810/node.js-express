var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/article-list', function(req, res, next) {
  res.render('article/article-list');
});
router.get('/article-add', function(req, res, next) {
  res.render('article/article-add');
});

module.exports = router;
