var express = require('express');
var router = express.Router();

var Corgi = require('../models/corgi');

/* GET corgis listing. */
router.get('/', function(req, res, next) {
  Corgi.find({}, function(err, corgis){
    if (err){
      console.log(err)
    }else {
      res.json(corgis);
    }
  });
});

/* POST corgis */
router.post('/', function(req, res, next){
  var corgi = new Corgi(req.body);
  corgi.save(function(err){
    if (err){
      res.status(500).send();
    }else {
      res.json(corgi);
    }
  })
})

/* middleware */
router.use('/:corgiId', function(req, res, next){
  Corgi.findOne({ '_id': req.params.corgiId }, function(err, corgi){
    if (err) {
      res.status(500).send();
    } else {
      if (corgi){
        res.corgi = corgi;
        next();
      } else {
        res.status(404).send();
      }
    }
  })
})

/* GET /corgis/:corgiId */
router.get('/:corgiId', function(req, res, next){
  res.json(res.corgi);
})

/* PUT /corgis  */
router.put('/:corgiId', function(req, res, next){
  Corgi.findByIdAndUpdate(req.params.corgiId, { $set: req.body }, function(err, corgi){
    if (err){
      res.status(500).send();
    } else {
      Corgi.findOne({ '_id': req.params.corgiId }, function(err, corgi){
        if (err) {
          res.status(500).send();
        }else {
          if (corgi){
            res.corgi = corgi;
            res.json(res.corgi);
          } else {
            res.status(404).send();
          }
        }
      });
    }
  });
});

/* DELETE /corgis */
router.delete('/:corgiId', function(req, res, next) {
  Corgi.remove({'_id': res.corgi._id}, function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})

module.exports = router;


