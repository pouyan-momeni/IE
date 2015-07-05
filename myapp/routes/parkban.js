/**
 * Created by pouyan on 5/19/15 AD.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('parkban.jade');
    next();
});

module.exports = router;