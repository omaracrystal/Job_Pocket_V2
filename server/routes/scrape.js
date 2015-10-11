var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var url = "http://www.imdb.com/title/tt1229340/";

request.post({

  request(url, function(err, res, body) {
    if(err) {
      callback.call(null, new Error('Request failed'));
      return;
    }
    var $ = cheerio.load(body);
    var text = $('#element').text();
    // extract our data
});

  // do scraping
});


app.listen('8081');
exports = module.exports = app;


// app.get('/scrape', function (req, res) {
//   request(url, function (err, res, html) {
//       if (!err && res.statusCode == 200) {
//         // pass DOM to cheerio
//         var $ = cheerio.load(html);
//         var title, release, rating;
//         var json = {
//           title: "",
//           release: "",
//           rating: ""
//         };
//       console.log(json);

//      $('.header').filter(function(){
//             var data = $(this);
//             title = data.children().first().text();
//             release = data.children().last().children().text();

//             json.title = title;
//             json.release = release;
//           });

//           $('.star-box-giga-star').filter(function(){
//             var data = $(this);
//             rating = data.text();

//             json.rating = rating;
//           });
//     }

//     fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
//           console.log('File successfully written! - Check your project directory for the output.json file');
//         });

//         res.send('Check your console!');
//   });
// });

