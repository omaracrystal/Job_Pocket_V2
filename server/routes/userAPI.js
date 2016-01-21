var express = require('express');
var router = express.Router();
var passport = require('passport');
var local = require('passport-local');
var User = require('../models/user.js');


router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    console.log(req.body);
    if (err) {
      console.log("there is an error when registering");
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
      console.log("Registration successful");
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});

router.post('/login', function(req, res, next) {
  console.log("LOGIN");
  passport.authenticate('local', function(err, user, info) {
      console.log("here?")
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        console.log("could not login user");
        return res.status(500).json({err: 'Could not log in user'});
      }
      console.log("login successful");
      res.status(200).json({status: 'Login successful!'});
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'});
});

module.exports = router;
