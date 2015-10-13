var express = require('express');
var router = express.Router();
var listing = require('../models/listing.js');

// get all jobs
router.get('/listing', function(req, res, next) {
  listing.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


// get a listing
router.get('/listing/:id', function(req, res, next) {
  listing.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// post a listing
router.post('/listing', function(req, res, next) {
  newjob = new listing({
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

// put a listing
router.put('/listing/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  };
  listing.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// delete a listing
router.delete('/listing/:id', function(req, res, next) {
  listing.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
