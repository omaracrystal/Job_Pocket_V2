var express = require('express');
var router = express.Router();
var job = require('../models/job.js');

// get all jobs
router.get('/job', function(req, res, next) {
  job.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


// get a job
router.get('/job/:id', function(req, res, next) {
  job.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// post a job
router.post('/job', function(req, res, next) {
  newjob = new job({
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

// put a job
router.put('/job/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  };
  job.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// delete a job
router.delete('/job/:id', function(req, res, next) {
  job.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;

