var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/index.html'));
});

router.get('/home', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/home.html'));
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/about.html'));
});


module.exports = router;
