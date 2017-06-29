var express = require('express');
var router = express.Router();

var ctrlOthers=require('../controllers/others');router.get('/',ctrlOthers.angularapp);

module.exports = router;
