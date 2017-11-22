var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});
router.get('/tip', function(req, res, next) {
  res.render('tip');
});

module.exports = router;
