var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'How Big Is Your Head?' });
});

router.get('/data', function(req,res,next){
  res.render('data');
});

module.exports = router;
