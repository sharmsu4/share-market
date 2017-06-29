var express = require('express');
var router = express.Router();var companyShare=require('../controllers/companyShare');router.get('/getMarketShareDetails',companyShare.shareMarketDetails);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
