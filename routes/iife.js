/**
 * Created by HB on 2016-02-01.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var path = __dirname;
    path = path.replace('\\routes','');
    res.sendfile(path+'/views/iife.html');
});

module.exports = router;
