var express = require('express');
var router = express.Router();


var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hey im working kinda');
  Corgi.find({}, function(err, corgis){
    if (err){
      console.log(err);
    } else {
      res.render('index', {
        title: 'Corgi Harmony',
        corgiAge: corgis[0].age,
        corgiName: corgis[0].name });
      console.log(corgis);
    }
  })
});

/* middleware */
/*router.use('/:corgiId', function(req, res, next){
  Corgi.findOne({})
}) */



module.exports = router;
