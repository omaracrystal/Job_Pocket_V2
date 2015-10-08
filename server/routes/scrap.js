var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var url = "https://denver.craigslist.org/sof/5258295518.html";

app.get('/scrap', function (req, res) {
  request(url, function (err, res, html) {
      if (!err && res.statusCode == 200) {
        // pass DOM to cheerio
        var $ = cheerio.load(html);
      console.log(html);
 }});
});

app.listen('8081');
exports = module.exports = app;

