var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/admin-list', function(req, res, next) {
  res.render('users/admin-list');
});

module.exports = router;
