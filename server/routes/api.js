var express = require('express');
var router = express.Router();
var url = require('../models/url.js');

// get all jobs
router.get('/urls', function(req, res, next) {
  url.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


// get a url
router.get('/url/:id', function(req, res, next) {
  url.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// post a url
router.post('/url', function(req, res, next) {
  newjob = new url({
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  });
  newjob.save(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// put a url
router.put('/url/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  };
  url.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// delete a url
router.delete('/url/:id', function(req, res, next) {
  url.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
