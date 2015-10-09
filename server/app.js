// *** main dependencies *** //
var dotenv = require('dotenv');
dotenv.load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

//mongoose
mongoose.connect('mongodb://localhost/mean-auth');

// *** routes *** //
// var routes = require('./routes/index.js');
var apiRoutes = require('./routes/api.js');
var user = require('./routes/userAPI.js');

// *** express instance *** //
var app = express();


// *** static directory *** //
// app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));


// *** main routes *** //
// app.use('/', routes);
app.use('/api/v1/', apiRoutes);
app.use('/auth', user);

///THIS IS NECESARY - unclear what it's doing
app.get('/', function(req, res){
 console.log("hello");
 res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({status: 'Error!'});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({status: 'Error!'});
});


module.exports = app;
