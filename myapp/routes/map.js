/**
 * Created by pouyan on 5/26/15 AD.
 */

var express = require('express');
var map = express.Router();
//var request = require('request');

/* GET users listing. */
var t;

var db2 = require('./db.js');

map.get('/t=:t', function(req, res, next) {
    //t = req.params.t;
    //return 1;
    var Reserve = db2.mongoose.model('Reserves', db2.reserveSchema);
    Reserve.find({}, function(err, thor) {
        if (err) return console.error(err);
        console.dir(thor);
    });

    next();
});

module.exports = map;