var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/slideshows', function(req, res) {
  res.json([
  		{"title": "How To Start A Startup - Lec 1",
  		"publisher": "Y-Combinator"},
  		{"title": "Algebra 1 - Lec 1",
  		"publisher": "Khan Academy"},
  		{"title": "Intro to Programming",
  		"publisher": "edX"},
  	]);
});

module.exports = router;
