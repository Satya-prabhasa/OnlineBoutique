var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availableitems to check the available items' });
});

router.get('/availableitems', function(req, res, next) {
                res.send("These are the available items :<br/>Item no 1: Green Lehanga <br/>Item no 2: Red  Lehanga <br/>Item no 3: White Lehanga <br/>Item no 4: Pink Lehanga <br/>Item no 4: Black Lehanga");
               
});

module.exports = router;
