var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/experience', function(req, res, next) {
  res.render('experience');
});

router.get('/education', function(req, res, next) {
  res.render('education');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
